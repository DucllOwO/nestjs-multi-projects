import { Module } from '@nestjs/common';
import { AppConfigService } from './app-config.service';
import { ConfigModule } from '@nestjs/config';
import { validate } from './env.validation';

@Module({
  imports: [ConfigModule.forRoot({
    validate,
    expandVariables: true, // https://docs.nestjs.com/techniques/configuration#expandable-variables
  }),],
  providers: [AppConfigService]
})
export class AppConfigModule {}
