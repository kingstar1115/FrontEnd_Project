import { Injectable, Logger } from '@nestjs/common';
import { Blog } from './blog.entity';
import { BlogRepository } from './blog.repository';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogService {
  constructor(private readonly blogRepository: BlogRepository) {}

  private readonly logger = new Logger(BlogService.name);

  async findById(id: number): Promise<Blog> {
    this.logger.log(`Retrieve ${id} Blog`);

    // return this.blogRepository.findOne({ where: { id } });
    return await this.blogRepository.findByIdWithUserAndTag(id);
  }

  async findAll(): Promise<Blog[]> {
    this.logger.log(`Retrieve all Blog`);

    // return this.blogRepository.find();
    return await this.blogRepository.findAllWithUserAndTag();
  }

  async create(body: CreateBlogDto): Promise<Blog> {
    this.logger.log(`Create a new ${body.title} Blog`);

    const newBlog: Partial<Blog> = body;
    const createdBlog = await this.blogRepository.create(newBlog);
    return await this.blogRepository.save(createdBlog);
  }

  async update(id: number, body: UpdateBlogDto) {
    const blog = await this.findById(id);

    if (blog) {
      await this.blogRepository.update(
        { id },
        this.blogRepository.create(body),
      );
      this.logger.log(`Update ${id} Blog`);

      // return this.findById(id);
      return await this.blogRepository.findByIdWithUserAndTag(id);
    }

    return `Blog ID:${id} is not exist`;
  }
}
