import { Module } from '@nestjs/common';
import { BlogViewController } from './blog-view.controller';
import { BlogViewRepository } from './blog-view.repository';
import { BlogViewService } from './blog-view.service';

@Module({
  controllers: [BlogViewController],
  providers: [BlogViewService, BlogViewRepository],
  exports: [BlogViewService],
})
export class BlogViewModule {}
