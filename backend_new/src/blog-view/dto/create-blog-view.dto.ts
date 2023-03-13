import { ApiProperty } from '@nestjs/swagger';
import { BlogExistsByIdValidator } from '@src/blog/validators/blog-exists-by-id.validator';
import { UserExistsByIdValidator } from '@src/user/validator/user-exists-by-id.validator';
import { IsNumber, Validate } from 'class-validator';

export class CreateBlogViewDto {
  @ApiProperty()
  @Validate(UserExistsByIdValidator)
  @IsNumber()
  userId: number;

  @ApiProperty()
  @Validate(BlogExistsByIdValidator)
  @IsNumber()
  blogId: number;
}
