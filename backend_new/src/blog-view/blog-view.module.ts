import { Module } from '@nestjs/common';
import { UserModule } from '@src/user/user.module';
import { BlogViewController } from './blog-view.controller';
import { BlogViewRepository } from './blog-view.repository';
import { BlogViewService } from './blog-view.service';

@Module({
  imports: [UserModule],
  controllers: [BlogViewController],
  providers: [BlogViewService, BlogViewRepository],
  exports: [BlogViewService],
})
export class BlogViewModule {}
