import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { Blog } from './blog.entity';
import { BlogView } from './blog_view.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    nullable: false,
  })
  username: string;

  @Column({
    nullable: false,
  })
  email: string;

  @Column({
    nullable: false,
  })
  userpwd: string;

  @Column({
    name: 'wallet_address',
    nullable: false,
  })
  walletAddress: string;

  @Column()
  avatar: string;

  @Column({
    name: 'email_confirm',
    nullable: false,
    default: false,
  })
  emailConfirm: boolean;

  @Column({ name: 'is_delete', nullable: false, default: false })
  isDelete: boolean;

  @OneToMany(() => Blog, (blog) => blog.user)
  blogs: Blog[];

  @OneToMany(() => BlogView, (blog_view) => blog_view.user)
  blog_views: BlogView[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
