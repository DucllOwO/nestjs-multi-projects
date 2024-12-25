import { Module } from '@nestjs/common';
import { ItemRepository } from './repository/item.repository';
import { OrderRepository } from './repository/order.repository';
import { ProductRepository } from './repository/product.repository';

@Module({
  providers: [ItemRepository, OrderRepository, ProductRepository],
  exports: [ItemRepository, OrderRepository, ProductRepository]
})
export class RepositoryModule {}
