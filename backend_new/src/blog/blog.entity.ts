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
import { User } from 'src/user/user.entity';
import { Comment } from 'src/comment/comment.entity';
import { BlogView } from '@src/blog-view/blog-view.entity';
import { Tag } from '@src/tag/tag.entity';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column()
  title: string;

  @Column({ name: 'banner_img', nullable: true })
  bannerImg: string;

  @Column()
  content: string;

  @Column({ name: 'is_delete', default: false })
  isDelete: boolean;

  @ManyToOne(() => User, (user) => user.blogs, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Tag, (tag) => tag.blogs, { nullable: true })
  @JoinColumn({ name: 'tag_id' })
  tag: Tag;

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
