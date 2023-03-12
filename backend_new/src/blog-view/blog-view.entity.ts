import { Blog } from '@src/blog/blog.entity';
import { User } from '@src/user/user.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BlogView {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @ManyToOne(() => User, (user) => user.blog_views, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Blog, (blog) => blog.blog_views, { nullable: false })
  @JoinColumn({ name: 'blog_id' })
  blog: Blog;
}
