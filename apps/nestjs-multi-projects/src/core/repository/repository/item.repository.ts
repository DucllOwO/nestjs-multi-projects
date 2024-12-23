import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Item } from 'apps/nestjs-multi-projects/src/module/item/item.entity';
import { Request } from 'express';
import { DataSource } from 'typeorm';
import { BaseRepository } from './base.repository';
import { CreateItemDto } from 'apps/nestjs-multi-projects/src/module/item/dto/req.dto';

@Injectable({ scope: Scope.REQUEST })
export class ItemRepository extends BaseRepository {
  constructor(dataSource: DataSource, @Inject(REQUEST) req: Request) {
    super(dataSource, req);
  }

  // Create multiple items
  async createItems(orderId: number, data: CreateItemDto[]) {
    const items = data.map((e) => {
      return {
        order: { id: orderId },
        product: { id: e.productId },
        quantity: e.quantity,
      } as Item;
    });

    await this.getRepository(Item).insert(items);
  }
}