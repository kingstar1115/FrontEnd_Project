import { ApiProperty } from '@nestjs/swagger';
import { TagExistsByIdValidator } from '@src/tag/validators/tag-exists-by-id.validator';
import { UserExistsByIdValidator } from '@src/user/validator/user-exists-by-id.validator';
import {
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
  Validate,
} from 'class-validator';

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
  bannerImg: string;

  @ApiProperty({
    example: 'Content',
    required: true,
    description: 'Blog Content',
  })
  @IsString()
  @MinLength(1)
  content: string;

  @ApiProperty()
  @Validate(UserExistsByIdValidator)
  @IsNumber()
  userId: number;

  @ApiProperty()
  @IsOptional()
  @Validate(TagExistsByIdValidator)
  @IsNumber()
  tagId: number;
}
