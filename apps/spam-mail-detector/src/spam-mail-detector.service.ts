import { Injectable } from '@nestjs/common';

@Injectable()
export class SpamMailDetectorService {
  getHello(): string {
    return 'Hello World!';
  }
}
