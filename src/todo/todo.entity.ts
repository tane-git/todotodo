import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column({ default: false })
  isUrgent: boolean;

  @Column({ default: true })
  isImportant: boolean;

  @Column({ default: false })
  isComplete: boolean;
}
