import { IsString, IsNotEmpty } from 'class-validator';

export class UrlCodeDto {
  @IsString()
  @IsNotEmpty()
  urlCode: string;
}
