import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productsService: ProductService) {}

  @Get()
  async getAllProducts() {
    return await this.productsService.getAllProducts();
  }
}