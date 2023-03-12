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
import { Blog } from './blog.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column()
  content: string;

  @Column()
  author: string;

  @Column()
  email: string;

  @Column({
    name: 'parent_id',
    type: 'bigint',
  })
  parentId: number;

  @Column({ name: 'is_delete', nullable: false, default: false })
  isDelete: boolean;

  @ManyToOne(() => Blog, (blog) => blog.comments)
  @JoinColumn({ name: 'blog_id' })
  blog: Blog;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
