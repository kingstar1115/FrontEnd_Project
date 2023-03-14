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
import { Blog } from './blog.entity';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Controller('blog')
@ApiResponse(ApiResponseHelper.success(User))
@ApiResponse(ApiResponseHelper.unauthorized())
@UseGuards(JwtAuthGuard)
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  async create(@Body() createBlog: CreateBlogDto): Promise<Blog> {
    const createdBlog = await this.blogService.create(createBlog);
    return createdBlog;
  }

  @Get()
  async findAll(): Promise<Blog[]> {
    const allBlogs = await this.blogService.findAll();
    return allBlogs;
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Blog> {
    const blog = await this.blogService.findById(id);
    return blog;
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateBlog: UpdateBlogDto) {
    const updatedBlog = await this.blogService.update(id, updateBlog);
    return updatedBlog;
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<string> {
    const alert = await this.blogService.delete(id);
    return alert;
  }
}
