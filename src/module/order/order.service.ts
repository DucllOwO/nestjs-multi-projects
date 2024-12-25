import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { OrderRepository } from '../../core/repository/repository/order.repository';
import { CreateItemDto } from '../item/dto/req.dto';
import { ItemService } from '../item/item.service';

@Injectable()
export class OrderService {
  constructor(
    private ordersRepository: OrderRepository,
    private itemsService: ItemService,
  ) {}

  async getOrders() {
    return await this.ordersRepository.getOrders();
  }

  async createOrder(items: CreateItemDto[]) {
    const orderNo = `ORD_${randomUUID()}`;
    const order = await this.ordersRepository.createOrder(orderNo);
    await this.itemsService.createItems(order.id, items);
    return order;
  }
}
