import { Blog } from '@src/blog/blog.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column()
  content: string;

  @Column({ nullable: true })
  author: string;

  @Column({ nullable: true })
  email: string;

  @Column({ type: 'bigint' })
  blogId: number;

  @Column({
    name: 'parent_id',
    type: 'bigint',
    nullable: true,
  })
  parentId: number;

  @Column({ name: 'is_delete', default: false })
  isDelete: boolean;

  @ManyToOne(() => Blog, (blog) => blog.comments, { nullable: false })
  @JoinColumn({ name: 'blog_id' })
  blog: Blog;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
