import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Product } from 'apps/nestjs-multi-projects/src/module/product/product.entity';
import { Request } from 'express';
import { DataSource } from 'typeorm';
import { BaseRepository } from './base.repository';

@Injectable({ scope: Scope.REQUEST })
export class ProductRepository extends BaseRepository {
  constructor(dataSource: DataSource, @Inject(REQUEST) req: Request) {
    super(dataSource, req);
  }

  async getAllProducts() {
    return await this.getRepository(Product).find();
  }
}