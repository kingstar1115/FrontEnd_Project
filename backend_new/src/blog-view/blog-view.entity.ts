import { Blog } from '@src/blog/blog.entity';
import { User } from '@src/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class BlogView {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'bigint' })
  userId: number;

  @Column({ type: 'bigint' })
  blogId: number;

  @ManyToOne(() => User, (user) => user.blog_views, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Blog, (blog) => blog.blog_views, { nullable: false })
  @JoinColumn({ name: 'blog_id' })
  blog: Blog;
}
