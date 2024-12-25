import { ENTITY_MANAGER_KEY } from "@app/database/database.constant";
import { DataSource, EntityManager, Repository } from "typeorm";
import { Request } from "express";

export class BaseRepository {
  constructor(private dataSource: DataSource, private request: Request) { }
  
  protected getRepository<T>(entityClass: new () => T): Repository<T> {
    const entityManager: EntityManager = this.request[ENTITY_MANAGER_KEY] ?? this.dataSource.manager;

    return entityManager.getRepository(entityClass)
  }
}