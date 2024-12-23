import { Test, TestingModule } from '@nestjs/testing';
import { SpamMailDetectorController } from './spam-mail-detector.controller';
import { SpamMailDetectorService } from './spam-mail-detector.service';

describe('SpamMailDetectorController', () => {
  let spamMailDetectorController: SpamMailDetectorController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SpamMailDetectorController],
      providers: [SpamMailDetectorService],
    }).compile();

    spamMailDetectorController = app.get<SpamMailDetectorController>(
      SpamMailDetectorController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(spamMailDetectorController.getHello()).toBe('Hello World!');
    });
  });
});
