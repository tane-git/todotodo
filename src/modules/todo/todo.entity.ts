import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

// @Entity({ name: 'Todo', schema: 'todo' })
@Entity({ name: 'todo' })
export class Todo extends BaseEntity {
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
