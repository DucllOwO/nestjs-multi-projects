import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { RepositoryModule } from '../../core/repository/repository.module';

@Module({
  controllers: [ItemController],
  providers: [ItemService],
  imports: [RepositoryModule]
})
export class ItemModule {}
