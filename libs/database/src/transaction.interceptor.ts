import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { catchError, concatMap, finalize, Observable } from "rxjs";
import { DataSource } from "typeorm";
import { ENTITY_MANAGER_KEY } from "./database.constant";

@Injectable()
/**
 * Whenever this interceptor is applied to a route, we start a transaction and attach an entity manager containing the transaction to the request with the key ‘ENTITY_MANAGER’. We export that value in a constant to avoid potential typos.
 */
export class TransactionInterceptor implements NestInterceptor {
  constructor(private dataSource: DataSource) { }
  
  async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
    const req = context.switchToHttp().getRequest<Request>();
    
    // start transaction
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    // attach query manager with transaction to the request
    req[ENTITY_MANAGER_KEY] = queryRunner.manager;

    return next.handle().pipe(
      // concatMap gets called when route handler completes successfully
      concatMap(async (data) => {
        await queryRunner.commitTransaction();
        return data;
      }),
      // catchError gets called when route handler throws an exception
      catchError(async (e) => {
        await queryRunner.rollbackTransaction();
        throw e;
      }),
      // always executed, even if catchError method throws an exception
      finalize(async () => {
        await queryRunner.release();
      })
    )
  }
}