import { Injectable } from '@nestjs/common';
import { ItemRepository } from '../../core/repository/repository/item.repository';
import { CreateItemDto } from './dto/req.dto';

@Injectable()
export class ItemService {
  constructor(private itemsRepository: ItemRepository) {}

  async createItems(orderId: number, items: CreateItemDto[]) {
    await this.itemsRepository.createItems(orderId, items);
  }
}
