import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { RepositoryModule } from '../../core/repository/repository.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [RepositoryModule]
})
export class ProductModule {}
