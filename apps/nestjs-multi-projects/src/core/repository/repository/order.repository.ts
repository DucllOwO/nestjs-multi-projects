import { Inject, Injectable, Scope } from '@nestjs/common';
import { Request } from 'express';
import { DataSource } from 'typeorm';
import { REQUEST } from '@nestjs/core';
import { Order } from 'apps/nestjs-multi-projects/src/module/order/order.entity';
import { BaseRepository } from './base.repository';

@Injectable({ scope: Scope.REQUEST })
export class OrderRepository extends BaseRepository {
  constructor(dataSource: DataSource, @Inject(REQUEST) req: Request) {
    super(dataSource, req);
  }

  async getOrders() {
    return await this.getRepository(Order).find({
      relations: {
        items: {
          product: true,
        },
      },
    });
  }

  async createOrder(orderNo: string) {
    const ordersRepository = this.getRepository(Order);

    const order = ordersRepository.create({
      date: new Date(),
      orderNo: orderNo,
    });
    await ordersRepository.insert(order);

    return order;
  }
}