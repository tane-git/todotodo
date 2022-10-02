import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToMany,
} from 'typeorm';
import { User } from '../Users/user.entity';

@Entity({ name: 'Todo' })
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

    @ManyToMany(() => User, (user) => user.todos)
    users: User[];
}
