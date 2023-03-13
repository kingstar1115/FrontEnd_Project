import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Blog } from './blog.entity';
@Injectable()
export class BlogRepository extends Repository<Blog> {
  constructor(private readonly dataSource: DataSource) {
    super(Blog, dataSource.manager);
  }

  async findByIdWithUserAndTag(id: number): Promise<Blog> {
    const queryBuilder = this.createQueryBuilder('blog');

    queryBuilder.leftJoinAndSelect('blog.user', 'user');
    queryBuilder.leftJoinAndSelect('blog.tag', 'tag');

    const blog = await queryBuilder.where({ id }).getOne();

    return blog;
  }

  async findAllWithUserAndTag(): Promise<Blog[]> {
    const queryBuilder = this.createQueryBuilder('blog');

    queryBuilder.leftJoinAndSelect('blog.user', 'user');
    queryBuilder.leftJoinAndSelect('blog.tag', 'tag');

    const blogs = await queryBuilder.getMany();

    return blogs;
  }
}
