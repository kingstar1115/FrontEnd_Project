import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'contact_id',
  })
  id: number;

  @Column({
    name: 'firstname',
    nullable: false,
    default: '',
  })
  firstname: string;

  @Column({
    name: 'lastname',
    nullable: false,
    default: '',
  })
  lastname: string;

  @Column({
    name: 'email',
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    name: 'subject',
    nullable: false,
    default: '',
  })
  subject: string;

  @Column({
    name: 'message',
    nullable: false,
    default: '',
  })
  message: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}