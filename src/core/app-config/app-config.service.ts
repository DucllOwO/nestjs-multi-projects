import { Injectable } from '@nestjs/common';
import { EnvironmentVariables } from './app-config.constant';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
    constructor(private readonly configService: ConfigService<EnvironmentVariables, true>) {
        
    }

    get appConfig() {
        return {
            port: this.configService.get("APP_PORT"),
            apiPrefix: this.configService.get("API_PREFIX")
        }
    }

    get db() {
        return {
            host: this.configService.get("DB_MASTER_HOST"),
            port: this.configService.get("DB_MASTER_PORT"),
            user: this.configService.get("DB_MASTER_USER"),
            password: this.configService.get("DB_MASTER_PWD"),
            name: this.configService.get("DB_MASTER_NAME")
        }
    }
}
