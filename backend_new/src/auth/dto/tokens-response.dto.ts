import { ApiProperty } from '@nestjs/swagger';

export class TokensResponseDto {
  @ApiProperty({ example: 'F?2BVjaxNR-&hn%', required: true })
  accessToken: string;

  @ApiProperty({ example: 'F?2BVjaxNR-&hn%', required: false })
  refreshToken?: string;
}
