import { Module } from '@nestjs/common';
import { ProductModule } from './module/product/product.module';
import { ItemModule } from './module/item/item.module';
import { OrderModule } from './module/order/order.module';
import { RepositoryModule } from './core/repository/repository.module';


@Module({
  imports: [ProductModule, ItemModule, OrderModule, RepositoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
