import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { Comment } from './comment.entity';
import { BlogView } from './blog_view.entity';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    nullable: false,
  })
  title: string;

  @Column({ name: 'banner_img' })
  bannerImg: string;

  @Column()
  content: string;

  @Column({ name: 'is_delete', nullable: false, default: false })
  isDelete: boolean;

  @ManyToOne(() => User, (user) => user.blogs)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Comment, (comment) => comment.blog)
  comments: Comment[];

  @OneToMany(() => BlogView, (blog_view) => blog_view.blog)
  blog_views: BlogView[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
