import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { TodoService } from '../Todo/todo.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        // ? not sure if needed:
        private dataSource: DataSource,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private todoService: TodoService,
    ) {}

    async create(user: CreateUserDto) {
        //* The User might have some todo ids in the todos field.
        //* Do I get these todos than use cascades? No???
        //* Find those todos?

        // ? In the typeOrm examples, it looks like if I map the array of ids
        // ? to actual Todo objects, then when I save, with cascades, the relationship will also be saved...
        // ? This seems dumb though, if I already have an array of IDs and thats all the join table needs...

        // if (User.todos.length > 0) {
        //     const todos = User.todos.map((todoId) => {
        //         return this.todoService.findById(todoId);
        //     });
        // }

        // maybe I dont need the join table entity, if I can just get it directly...
        // const joinTable = this.dataSource.createQueryBuilder((queryRunner) => {
        //     return queryRunner.
        // });

        const testUser = {
            name: 'testUser',
            todos: [
                1,
                // {
                //     label: 'testUsersTodo',
                //     isComplete: false,
                //     isUrgent: false,
                //     isImportant: false,
                // },
            ],
        };

        return this.userRepository.save(testUser);

        // const savedUser = await this.userRepository.save(user);
        // console.log(savedUser);

        // //* I need to insert into the join table, a row for each element in the todos array (from the argument User)
        // const joinTable = this.dataSource.getRepository('users_todos_todo');
        // console.log(joinTable);

        // const usersId = savedUser.id;
        // console.log('usersId: ', usersId);

        // const todos = user.todos.map((todoId) => {
        //     return { usersId, todoId };
        // });

        // //* just a test:
        // joinTable.create({
        //     usersId: 1,
        //     todoId: 1,
        // });

        // joinTable.save(todos);

        // user.todos.map((todoId) => {
        //     joinTable.save({
        //         usersId,
        //         todoId,
        //     });
        // });
    }

    findAll() {
        return this.userRepository.find();
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
