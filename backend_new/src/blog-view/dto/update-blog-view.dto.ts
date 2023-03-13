import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogViewDto } from './create-blog-view.dto';

export class UpdateBlogViewDto extends PartialType(CreateBlogViewDto) {}
