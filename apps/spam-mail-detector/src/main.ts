import { NestFactory } from '@nestjs/core';
import { SpamMailDetectorModule } from './spam-mail-detector.module';

async function bootstrap() {
  const app = await NestFactory.create(SpamMailDetectorModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
