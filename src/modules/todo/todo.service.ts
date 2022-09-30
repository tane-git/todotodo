import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/updateTodo.dto';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
    constructor(
        private dataSource: DataSource,
        @InjectRepository(Todo)
        private todosRepository: Repository<Todo>,
    ) {}

    save(todo: CreateTodoDto) {
        // console.log('todo: ', todo);
        // return null;

        //! this line:
        // return this.todosRepository.save(todo);
        return this.todosRepository.create(todo);
    }

    findAll(): Promise<Todo[]> {
        console.log('finding all...');
        return this.todosRepository.find();
    }

    findOne(id: number): Promise<Todo> {
        return this.todosRepository.findOneBy({ id });
        // if i only wanted title and isComplete, make dto for this and map.
    }

    update(id: number, data: UpdateTodoDto): Promise<UpdateResult> {
        //? Explicit return type or no:
        //   update(id: number, data: UpdateTodoDto) {
        return this.todosRepository.update(id, data);
    }

    delete(id: number): Promise<DeleteResult> {
        return this.todosRepository.delete(id);
    }
}
