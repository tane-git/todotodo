import { Todo } from 'src/modules/Todo/todo.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToMany,
    JoinTable,
} from 'typeorm';

@Entity({ name: 'Users' })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Todo, (todo) => todo.users)
    @JoinTable()
    todos: Todo[];
}
