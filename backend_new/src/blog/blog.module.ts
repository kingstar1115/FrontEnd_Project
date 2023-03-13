import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogRepository } from './blog.repository';
import { BlogService } from './blog.service';
import { BlogExistsByIdValidator } from './validators/blog-exists-by-id.validator';

@Module({
  controllers: [BlogController],
  providers: [BlogService, BlogRepository, BlogExistsByIdValidator],
  exports: [BlogService],
})
export class BlogModule {}
