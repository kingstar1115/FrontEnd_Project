import {
  Body,
  Controller,
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
import { BlogView } from './blog-view.entity';
import { BlogViewService } from './blog-view.service';
import { CreateBlogViewDto } from './dto/create-blog-view.dto';
import { UpdateBlogViewDto } from './dto/update-blog-view.dto';

@Controller('blog-view')
@ApiResponse(ApiResponseHelper.success(User))
@ApiResponse(ApiResponseHelper.unauthorized())
@UseGuards(JwtAuthGuard)
export class BlogViewController {
  constructor(private readonly blogViewService: BlogViewService) {}

  @Post()
  async create(@Body() createBlogView: CreateBlogViewDto) {
    const createdBlogView = await this.blogViewService.create(createBlogView);
    return createdBlogView;
  }

  @Get()
  async findAll(): Promise<BlogView[]> {
    const allBlogViews = await this.blogViewService.findAll();
    return allBlogViews;
  }

  @Get('/userid/:id')
  async findByUserId(@Param('id') id: number): Promise<BlogView[]> {
    const blogviews = await this.blogViewService.findByUserId(id);
    return blogviews;
  }

  @Get('/blogid/:id')
  async findByBlogId(@Param('id') id: number): Promise<BlogView[]> {
    const blogviews = await this.blogViewService.findByBlogId(id);
    return blogviews;
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<BlogView> {
    const blogview = await this.blogViewService.findById(id);
    return blogview;
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateBlogView: UpdateBlogViewDto,
  ): Promise<BlogView> {
    const updatedBlogView = await this.blogViewService.update(
      id,
      updateBlogView,
    );
    return updatedBlogView;
  }
}
