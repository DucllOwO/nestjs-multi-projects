import { Body, Controller, Get, ParseArrayPipe, Post, UseInterceptors } from '@nestjs/common';
import { OrderService } from './order.service';
import { TransactionInterceptor } from '@app/database/transaction.interceptor';
import { CreateItemDto } from '../item/dto/req.dto';

@Controller('orders')
export class OrderController {
  constructor(private ordersService: OrderService) {}

  @Get()
  async getOrders() {
    return await this.ordersService.getOrders();
  }

  @Post()
  @UseInterceptors(TransactionInterceptor)
  async createOrder(
    @Body(new ParseArrayPipe({ items: CreateItemDto }))
    data: CreateItemDto[],
  ) {
    return await this.ordersService.createOrder(data);
  }
}