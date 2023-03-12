import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateBlogDto {
  @ApiProperty({
    example: 'Title',
    required: true,
    minimum: 1,
    description: 'Blog title',
  })
  @IsString()
  @MinLength(1)
  title: string;

  @ApiProperty({
    example: 'img url',
    required: false,
    description: 'Blog Image url',
  })
  @IsOptional()
  @IsString()
  @MinLength(1)
  banner_img: string;

  @ApiProperty({
    example: 'Content',
    required: true,
    description: 'Blog Content',
  })
  @IsString()
  @MinLength(1)
  content: string;

  @ApiProperty({
    example: 'User Id',
    required: true,
    description: 'User id',
  })
  @IsNumber()
  user_id: number;

  @ApiProperty({
    example: 'Tag Id',
    required: false,
    description: 'Tag id',
  })
  @IsOptional()
  @IsNumber()
  tag_id: number;
}
