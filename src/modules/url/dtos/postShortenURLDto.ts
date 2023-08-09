import { IsDefined, IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class PostShortenUrlDto {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  longUrl: string;
}
