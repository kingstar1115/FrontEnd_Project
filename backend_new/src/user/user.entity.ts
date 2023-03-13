import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  CreateDateColumn,
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { AuthRefreshToken } from '@src/auth-refresh-token/auth-refresh-token.entity';
import { Blog } from '@src/blog/blog.entity';
import { BlogView } from '@src/blog-view/blog-view.entity';

@Entity('user')
export class User {
  @Exclude({ toPlainOnly: true })
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @ApiProperty({ description: `Unique uuid`, maximum: 36 })
  @Column({ type: 'varchar', nullable: false, length: 36 })
  uuid: string;

  @ApiProperty({ description: 'Full name', maximum: 128, required: false })
  @Column({ type: 'varchar', nullable: false, length: 128 })
  name: string;

  @ApiProperty({ description: 'E-mail', maximum: 255, required: true })
  @Column({ type: 'varchar', nullable: false, length: 255 })
  email: string;

  @ApiProperty({ description: 'Password', maximum: 255, required: true })
  @Column({ type: 'varchar', nullable: false, length: 255 })
  password: string;

  @ApiProperty({ description: 'Wallet Address', maximum: 255 })
  @Column({ type: 'varchar', nullable: true, length: 255 })
  walletAddress: string;

  @ApiProperty({ description: 'Avatar', maximum: 255 })
  @Column({ type: 'varchar', nullable: true, length: 255 })
  avatar: string;

  @ApiProperty({ description: 'Is Delete' })
  @Column({ type: 'varchar', nullable: false, default: false })
  isDelete: boolean;

  @ApiProperty({ description: 'Email Confirm' })
  @Column({ type: 'varchar', nullable: false, default: false })
  emailConfirm: boolean;

  @ApiProperty({
    description: 'Date when the user was created',
    required: true,
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    description: 'Date when user was updated the last time',
    required: false,
  })
  @UpdateDateColumn()
  updatedAt: Date;

  @Exclude({ toPlainOnly: true })
  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(
    () => AuthRefreshToken,
    (authRefreshToken) => authRefreshToken.user,
  )
  @JoinColumn({ name: 'id', referencedColumnName: 'user_id' })
  refreshTokens: AuthRefreshToken[];

  @OneToMany(() => Blog, (blog) => blog.user)
  @JoinColumn({ name: 'id', referencedColumnName: 'user_id' })
  blogs: Blog[];

  @OneToMany(() => BlogView, (blog_view) => blog_view.user)
  @JoinColumn({ name: 'id', referencedColumnName: 'user_id' })
  blog_views: BlogView[];
}
