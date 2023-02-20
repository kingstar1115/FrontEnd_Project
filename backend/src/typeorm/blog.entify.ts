import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'blog_id',
  })
  id: number;

  @Column({
    name: 'name',
    nullable: false,
    default: '',
  })
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}