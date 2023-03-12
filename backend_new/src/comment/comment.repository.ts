import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Comment } from './comment.entity';
@Injectable()
export class CommentRepository extends Repository<Comment> {
  constructor(private readonly dataSource: DataSource) {
    super(Comment, dataSource.manager);
  }
}
