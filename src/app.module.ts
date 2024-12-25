import { Module } from '@nestjs/common';
import { ProductModule } from './module/product/product.module';
import { ItemModule } from './module/item/item.module';
import { OrderModule } from './module/order/order.module';
import { RepositoryModule } from './core/repository/repository.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './module/product/product.entity';
import { Order } from './module/order/order.entity';
import { Item } from './module/item/item.entity';
import { AppConfigModule } from './core/app-config/app-config.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ProductModule, ItemModule, OrderModule, RepositoryModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DATABASE,
    entities: [Product, Order, Item],
    synchronize: true,
    logging: true,
    // dropSchema: true, // start with a clean db on each run, DO NOT USE FOR PRODUCTION
  }), ConfigModule, AppConfigModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
