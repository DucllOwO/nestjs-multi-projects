import { IsNumber } from "class-validator";

export class BaseItemDto {
  @IsNumber()
  id: number;

  @IsNumber()
  quantity: number;
}