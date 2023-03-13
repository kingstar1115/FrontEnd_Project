import { ApiProperty } from '@nestjs/swagger';
import { BlogExistsByIdValidator } from '@src/blog/validators/blog-exists-by-id.validator';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
  Validate,
} from 'class-validator';
import { CommentExistsByIdValidator } from '../validator/comment-exists-by-id.validator';

export class CreateCommentDto {
  @ApiProperty()
  @IsString()
  @MinLength(1)
  content: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MinLength(1)
  author: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsEmail()
  @MinLength(1)
  email: string;

  @ApiProperty()
  @Validate(BlogExistsByIdValidator)
  @IsNumber()
  blogId: number;

  @ApiProperty()
  @IsOptional()
  @Validate(CommentExistsByIdValidator)
  @IsNumber()
  parentId: number;
}
