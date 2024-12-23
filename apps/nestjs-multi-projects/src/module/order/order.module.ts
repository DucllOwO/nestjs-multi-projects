import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { RepositoryModule } from '../../core/repository/repository.module';
import { OrderController } from './order.controller';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [RepositoryModule]
})
export class OrderModule {}
