import { Injectable, Logger } from '@nestjs/common';
import { Comment } from './comment.entity';
import { CommentRepository } from './comment.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(private readonly commentRepository: CommentRepository) {}

  private readonly logger = new Logger(CommentService.name);

  async findAll(): Promise<Comment[]> {
    this.logger.log(`Retrieve all Comments`);

    return this.commentRepository.findAllWithBlog();
  }

  async findById(id: number): Promise<Comment> {
    this.logger.log(`Retrieve ${id} Comment`);

    return this.commentRepository.findByIdWithBlog(id);
  }

  async findByBlogId(blogId: number): Promise<Comment[]> {
    this.logger.log(`Retrieve blogId:${blogId} Comment`);

    return this.commentRepository.findByBlogIdWithBlog(blogId);
  }

  async create(body: CreateCommentDto): Promise<Comment> {
    this.logger.log(`Create a new ${body.content} Blog`);

    const newComment: Partial<Comment> = body;
    const createdComment = await this.commentRepository.create(newComment);
    return await this.commentRepository.save(createdComment);
  }

  async update(id: number, body: UpdateCommentDto) {
    const comment = await this.findById(id);

    if (comment) {
      await this.commentRepository.update(
        { id },
        this.commentRepository.create(body),
      );

      return await this.findById(id);
    }

    return `Comment ID:${id} is not exist`;
  }
}
