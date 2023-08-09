import { IsDefined, IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class PutShortenUrlDto {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  longUrl: string;
}
