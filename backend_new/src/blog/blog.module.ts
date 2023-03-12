import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogRepository } from './blog.repository';
import { BlogService } from './blog.service';

@Module({
  controllers: [BlogController],
  providers: [BlogService, BlogRepository],
  exports: [BlogService],
})
export class BlogModule {}
