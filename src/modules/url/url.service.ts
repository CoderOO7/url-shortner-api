import { Injectable, NotFoundException } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UrlEntity } from './url.entity';
import { PostShortenUrlDto } from './dtos/postShortenURLDto';
import { UrlCodeDto } from './dtos/urlCodeDto';
import { PutShortenUrlDto } from './dtos/putShortenURLDto';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(UrlEntity)
    private urlRepo: Repository<UrlEntity>,
  ) {}

  async shortenUrl(
    baseUrl,
    { longUrl }: PostShortenUrlDto,
  ): Promise<UrlEntity> {
    const urlCode = nanoid(10);

    //check if the URL has already been shortened
    let url = await this.urlRepo.findOneBy({ longUrl });
    if (url) {
      return url;
    }

    //if it doesn't exist, shorten it
    const shortUrl = `${baseUrl}/${urlCode}`;

    //add the new record to the database
    url = this.urlRepo.create({
      urlCode,
      longUrl,
      shortUrl,
    });

    await this.urlRepo.save(url);
    return url;
  }

  async updateUrl(
    { urlCode }: UrlCodeDto,
    { longUrl }: PutShortenUrlDto,
  ): Promise<UrlEntity> {
    //update the record in the database
    await this.urlRepo.update(
      {
        urlCode,
      },
      { longUrl },
    );

    //check if the url is in db or not
    const url: UrlEntity = await this.urlRepo.findOneBy({ urlCode });

    if (!url) {
      throw new NotFoundException('Resource Not Found');
    }

    return url;
  }

  async deleteUrl(param: UrlCodeDto): Promise<void> {
    const data: UrlEntity = await this.urlRepo.findOneBy({
      urlCode: param.urlCode,
    });

    if (!data) {
      throw new NotFoundException('Resource Not Found');
    }

    await this.urlRepo.delete({ urlCode: param.urlCode });
  }

  async getUrlByCode(param: UrlCodeDto): Promise<UrlEntity> {
    const url: UrlEntity = await this.urlRepo.findOneBy({
      urlCode: param.urlCode,
    });

    if (!url) {
      throw new NotFoundException('Resource Not Found');
    }

    return url;
  }
}
