import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './interfaces/todo.interface';
import { TodoService } from './todo.service';
import { UpdateTodoDto } from './dto/updateTodo.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('todos')
@Controller('todos')
export class TodoController {
    constructor(private todoService: TodoService) {}

    @Post()
    async save(@Body() createTodoDto: CreateTodoDto) {
        this.todoService.save(createTodoDto);
    }

    @Get()
    async findAll(): Promise<Todo[]> {
        return await this.todoService.findAll();
    }

    @Get(':id')
    @ApiParam({ name: 'id', type: 'number' })
    async findOne(
        @Param('id', ParseIntPipe) id: number,
        //
    ) {
        return await this.todoService.findOne(id);
    }

    @Put(':id')
    @ApiParam({ name: 'id', type: 'number' })
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateTodoDto: UpdateTodoDto,
    ) {
        return await this.todoService.update(id, updateTodoDto);
    }

    @Delete(':id')
    @ApiParam({ name: 'id', type: 'number' })
    async delete(
        @Param('id', ParseIntPipe) id: number,
        //
    ) {
        return await this.todoService.delete(id);
    }
}
