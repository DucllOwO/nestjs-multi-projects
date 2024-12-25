import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../core/repository/repository/product.repository';

@Injectable()
export class ProductService {
  constructor(private productsRepository: ProductRepository) {}

  async getAllProducts() {
    return await this.productsRepository.getAllProducts();
  }
}
