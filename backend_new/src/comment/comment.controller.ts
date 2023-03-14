import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '@src/auth/guards/jwt-auth.guard';
import { ApiResponseHelper } from '@src/common/helpers/api-response.helper';
import { User } from '@src/user/user.entity';
import { Comment } from './comment.entity';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comment')
@ApiResponse(ApiResponseHelper.success(User))
@ApiResponse(ApiResponseHelper.unauthorized())
@UseGuards(JwtAuthGuard)
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async create(@Body() createComment: CreateCommentDto): Promise<Comment> {
    const createdComment = await this.commentService.create(createComment);
    return createdComment;
  }

  @Get()
  async findAll(): Promise<Comment[]> {
    const allComments = await this.commentService.findAll();
    return allComments;
  }

  @Get('/blogid/:id')
  async findByBlogId(@Param('id') id: number): Promise<Comment[]> {
    const comments = await this.commentService.findByBlogId(id);
    return comments;
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Comment> {
    const comment = await this.commentService.findById(id);
    return comment;
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateComment: UpdateCommentDto,
  ) {
    const updatedComment = await this.commentService.update(id, updateComment);
    return updatedComment;
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<string> {
    const alert = await this.commentService.delete(id);
    return alert;
  }
}
