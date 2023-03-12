import { Injectable } from '@nestjs/common';
import { Blog } from './blog.entity';
import { BlogRepository } from './blog.repository';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogService {
  constructor(private readonly blogRepository: BlogRepository) {}

  async findById(id: number): Promise<Blog> {
    return this.blogRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Blog[]> {
    return this.blogRepository.find();
  }

  async create(body: CreateBlogDto): Promise<Blog> {
    const createdBlog = await this.blogRepository.create(body);
    return await this.blogRepository.save(createdBlog);
  }

  async update(id: number, body: UpdateBlogDto): Promise<Blog> {
    await this.blogRepository.update({ id }, this.blogRepository.create(body));

    return this.findById(id);
  }
}
