import { dbConfig } from './database';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default (configService: ConfigService): TypeOrmModuleOptions => {
  return {
    port: configService.get('PORT'),
    ...dbConfig(configService),
  };
};
