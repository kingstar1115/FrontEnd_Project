import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentRepository } from './comment.repository';
import { CommentService } from './comment.service';
import { CommentExistsByIdValidator } from './validator/comment-exists-by-id.validator';

@Module({
  controllers: [CommentController],
  providers: [CommentService, CommentRepository, CommentExistsByIdValidator],
  exports: [CommentService],
})
export class CommentModule {}
