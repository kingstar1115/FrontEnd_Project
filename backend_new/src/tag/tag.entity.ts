import { Blog } from '@src/blog/blog.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Blog, (blog) => blog.tag)
  blogs: Blog[];
}
