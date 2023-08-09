import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlService } from './url.service';
import { UrlController } from './url.controller';
import { UrlEntity } from './url.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UrlEntity])],
  providers: [UrlService],
  controllers: [UrlController],
})
export class UrlModule {}
