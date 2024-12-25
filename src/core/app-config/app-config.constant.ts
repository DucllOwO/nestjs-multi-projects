import { IsNumber, IsString } from "class-validator"

export class EnvironmentVariables {
    @IsNumber()
    APP_PORT: number

    @IsString()
    API_PREFIX: string

    @IsString()
    DB_MASTER_HOST: string

    @IsNumber()
    DB_MASTER_PORT: number

    @IsString()
    DB_MASTER_USER: string

    @IsString()
    DB_MASTER_PWD: string

    @IsString()
    DB_MASTER_NAME: string
}

export enum Environment {
    Development = "development",
    Production = "production",
    Test = "test",
    Provision = "provision",
  }