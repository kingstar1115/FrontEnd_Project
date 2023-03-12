import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength, Validate } from 'class-validator';
import { RefreshTokenValidator } from '../validators/refresh-token.validator';

export class RefreshTokensDto {
  @ApiProperty({
    example: 'F?2BVjaxNR-&hn%',
    required: true,
    minLength: 64,
    maxLength: 64,
  })
  @IsString()
  @MinLength(64)
  @MaxLength(64)
  @Validate(RefreshTokenValidator)
  refreshToken: string;
}
