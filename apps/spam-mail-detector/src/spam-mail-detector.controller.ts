import { Controller, Get } from '@nestjs/common';
import { SpamMailDetectorService } from './spam-mail-detector.service';

@Controller()
export class SpamMailDetectorController {
  constructor(
    private readonly spamMailDetectorService: SpamMailDetectorService,
  ) {}

  @Get()
  getHello(): string {
    return this.spamMailDetectorService.getHello();
  }
}
