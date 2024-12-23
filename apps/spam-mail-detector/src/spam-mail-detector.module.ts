import { Module } from '@nestjs/common';
import { SpamMailDetectorController } from './spam-mail-detector.controller';
import { SpamMailDetectorService } from './spam-mail-detector.service';

@Module({
  imports: [],
  controllers: [SpamMailDetectorController],
  providers: [SpamMailDetectorService],
})
export class SpamMailDetectorModule {}
