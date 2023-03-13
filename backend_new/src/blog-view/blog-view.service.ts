import { Injectable, Logger } from '@nestjs/common';
import { BlogView } from './blog-view.entity';
import { BlogViewRepository } from './blog-view.repository';
import { CreateBlogViewDto } from './dto/create-blog-view.dto';
import { UpdateBlogViewDto } from './dto/update-blog-view.dto';

@Injectable()
export class BlogViewService {
  constructor(private readonly blogviewRepository: BlogViewRepository) {}

  private readonly logger = new Logger(BlogViewService.name);

  async findAll(): Promise<BlogView[]> {
    this.logger.log(`Retrieve all BlogView`);

    // return this.blogviewRepository.find();
    return this.blogviewRepository.findAllWithUserAndBlog();
  }

  async findById(id: number): Promise<BlogView> {
    this.logger.log(`Retrieve ${id} BlogView`);
    // return this.blogviewRepository.findOne({ where: { id } });
    return this.blogviewRepository.findByIdWithUserAndBlog(id);
  }

  async findByUserId(userId: number): Promise<BlogView[]> {
    this.logger.log(`Retrieve userId:${userId} BlogView`);
    // return this.blogviewRepository.find({ where: { userId } });
    return this.blogviewRepository.findByUserIdWithUserAndBlog(userId);
  }

  async findByBlogId(blogId: number): Promise<BlogView[]> {
    this.logger.log(`Retrieve blogId:${blogId} BlogView`);
    // return this.blogviewRepository.find({ where: { blogId } });
    return this.blogviewRepository.findByBlogIdWithUserAndBlog(blogId);
  }

  async findByUserIdBlogId(userId: number, blogId: number): Promise<BlogView> {
    this.logger.log(`Retrieve blogId:${blogId}, userId:${userId} BlogView`);
    // return this.blogviewRepository.find({ where: { blogId } });
    return this.blogviewRepository.findByUserIdBlogIdWithUserAndBlog(
      userId,
      blogId,
    );
  }

  async create(body: CreateBlogViewDto) {
    const blogview = await this.findByUserIdBlogId(body.userId, body.blogId);

    if (!blogview) {
      const newBlogView: Partial<BlogView> = body;
      const createdBlogView = await this.blogviewRepository.create(newBlogView);
      this.logger.log(`Create a new BlogView:${createdBlogView.id}`);
      await this.blogviewRepository.save(createdBlogView);
      return await this.findById(createdBlogView.id);
    }

    this.logger.warn(`Blogview is already exist. ${blogview.id}`);
    return `Blogview is already exist`;
  }

  async update(id: number, body: UpdateBlogViewDto): Promise<BlogView> {
    this.logger.log(`Update ${id} BlogView`);

    await this.blogviewRepository.update(
      { id },
      this.blogviewRepository.create(body),
    );

    return this.blogviewRepository.findByIdWithUserAndBlog(id);
  }
}
