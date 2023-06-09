import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Comment } from './comment.entity';
@Injectable()
export class CommentRepository extends Repository<Comment> {
  constructor(private readonly dataSource: DataSource) {
    super(Comment, dataSource.manager);
  }

  async findByIdWithBlog(id: number): Promise<Comment> {
    const queryBuilder = this.createQueryBuilder('comment');

    queryBuilder.leftJoinAndSelect('comment.blog', 'blog');

    const comment = await queryBuilder.where({ id, isDelete: true }).getOne();

    return comment;
  }

  async findByBlogIdWithBlog(blogId: number): Promise<Comment[]> {
    const queryBuilder = this.createQueryBuilder('comment');

    queryBuilder.leftJoinAndSelect('comment.blog', 'blog');

    const comment = await queryBuilder
      .where({ blogId, isDelete: true })
      .getMany();

    return comment;
  }

  async findAllWithBlog(): Promise<Comment[]> {
    const queryBuilder = this.createQueryBuilder('comment');

    queryBuilder.leftJoinAndSelect('comment.blog', 'blog');

    const comments = await queryBuilder.where({ isDelete: true }).getMany();

    return comments;
  }
}
