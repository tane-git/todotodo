import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({ name: 'Todo' })
export class Todo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ default: false })
    isUrgent: boolean;

    @Column({ default: true })
    isImportant: boolean;

    @Column({ default: false })
    isComplete: boolean;
}
