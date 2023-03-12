import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreateTagDto {
  @ApiProperty({
    example: 'Tag1',
    required: true,
    minimum: 1,
    description: 'Tag name',
  })
  @IsString()
  @MinLength(1)
  name: string;
}
