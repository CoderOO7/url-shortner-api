import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';

export const dbConfig = (
  configService: ConfigService,
): MongoConnectionOptions => ({
  type: 'mongodb',
  url: configService.get('DB_URL'),
  useNewUrlParser: true,
  entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
  // We are using migrations, synchronize should be set to false.
  synchronize: true,
  dropSchema: false,
  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: false,
  logging: true,
  // migrations: [join(__dirname, '../migrations/**/*{.ts,.js}')],
});
