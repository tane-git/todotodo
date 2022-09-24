import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './interfaces/todo.interface';
import { TodoService } from './todo.service';
import { UpdateTodoDto } from './dto/updateTodo.dto';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    this.todoService.create(createTodoDto);
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): string {
    return `This action returns the #${params.id} todo`;
  }

  @Put('id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return `This action updates the ${id} todo with ${updateTodoDto}`;
  }

  @Delete('id')
  remove(@Param('id') id: string) {
    return `This action removes the ${id} todo`;
  }
}
