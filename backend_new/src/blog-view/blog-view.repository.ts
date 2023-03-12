import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { BlogView } from './blog-view.entity';
@Injectable()
export class BlogViewRepository extends Repository<BlogView> {
  constructor(private readonly dataSource: DataSource) {
    super(BlogView, dataSource.manager);
  }
}
