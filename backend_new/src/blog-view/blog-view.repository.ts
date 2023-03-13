import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { BlogView } from './blog-view.entity';
@Injectable()
export class BlogViewRepository extends Repository<BlogView> {
  constructor(private readonly dataSource: DataSource) {
    super(BlogView, dataSource.manager);
  }

  async findByIdWithUserAndBlog(id: number): Promise<BlogView> {
    const queryBuilder = this.createQueryBuilder('blog_view');

    queryBuilder.leftJoinAndSelect('blog_view.user', 'user');
    queryBuilder.leftJoinAndSelect('blog_view.blog', 'blog');

    const blog_view = await queryBuilder.where({ id }).getOne();

    return blog_view;
  }

  async findByUserIdWithUserAndBlog(userId: number): Promise<BlogView[]> {
    const queryBuilder = this.createQueryBuilder('blog_view');

    queryBuilder.leftJoinAndSelect('blog_view.user', 'user');
    queryBuilder.leftJoinAndSelect('blog_view.blog', 'blog');

    const blog_view = await queryBuilder.where({ userId }).getMany();

    return blog_view;
  }

  async findByBlogIdWithUserAndBlog(blogId: number): Promise<BlogView[]> {
    const queryBuilder = this.createQueryBuilder('blog_view');

    queryBuilder.leftJoinAndSelect('blog_view.user', 'user');
    queryBuilder.leftJoinAndSelect('blog_view.blog', 'blog');

    const blog_view = await queryBuilder.where({ blogId }).getMany();

    return blog_view;
  }

  async findByUserIdBlogIdWithUserAndBlog(
    userId: number,
    blogId: number,
  ): Promise<BlogView> {
    const queryBuilder = this.createQueryBuilder('blog_view');

    queryBuilder.leftJoinAndSelect('blog_view.user', 'user');
    queryBuilder.leftJoinAndSelect('blog_view.blog', 'blog');

    const blog_view = await queryBuilder.where({ userId, blogId }).getOne();

    return blog_view;
  }

  async findAllWithUserAndBlog(): Promise<BlogView[]> {
    const queryBuilder = this.createQueryBuilder('blog_view');

    queryBuilder.leftJoinAndSelect('blog_view.user', 'user');
    queryBuilder.leftJoinAndSelect('blog_view.blog', 'blog');

    const blog_views = await queryBuilder.getMany();

    return blog_views;
  }
}
