import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class RefreshTokenInfo {
  @ApiProperty({
    example:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
    required: true,
    maximum: 255,
    description: 'E-mail',
  })
  @MaxLength(255)
  useragent: string;

  @ApiProperty({
    example: '127.0.0.1',
    required: true,
    maximum: 255,
    description: 'Ip Address',
  })
  @IsString()
  @MaxLength(255)
  ipaddress: string;
}
