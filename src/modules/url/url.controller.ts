import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { UrlService } from './url.service';
import { PostShortenUrlDto } from './dtos/postShortenURLDto';
import { Request } from 'express';
import { getURLComponentFromReq } from 'src/utils';
import { UrlEntity } from './url.entity';
import { UrlCodeDto } from './dtos/urlCodeDto';
import { PutShortenUrlDto } from './dtos/putShortenURLDto';

@Controller('')
export class UrlController {
  constructor(private service: UrlService) {}

  @Get(':urlCode')
  async redirect(@Res() res, @Param() param: UrlCodeDto) {
    const url = await this.service.getUrlByCode(param);
    return res.redirect(url.longUrl);
  }

  @Get(':urlCode/info')
  async getUrlByCode(@Param() param: UrlCodeDto): Promise<UrlEntity> {
    return await this.service.getUrlByCode(param);
  }

  @Post('shorten')
  async createShortenUrl(
    @Body() newData: PostShortenUrlDto,
    @Req() req: Request,
  ): Promise<UrlEntity> {
    const { baseUrl } = getURLComponentFromReq(req);
    return this.service.shortenUrl(baseUrl, newData);
  }

  @Put(':urlCode')
  async updateUrlByCode(
    @Param() param: UrlCodeDto,
    @Body() newData: PutShortenUrlDto,
  ): Promise<UrlEntity> {
    return this.service.updateUrl(param, newData);
  }

  @Delete(':urlCode')
  async deleteShortenUrl(@Param() param: UrlCodeDto): Promise<void> {
    return this.service.deleteUrl(param);
  }
}
