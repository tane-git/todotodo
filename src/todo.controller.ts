import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDto } from './create-todo.dto';
import { UpdateTodoDto } from './updateTodo.dto';

@Controller('todos')
export class CatsController {
  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    return `This action adds the new ${createTodoDto} todo`;
  }

  @Get()
  async findAll(): Promise<any[]> {
    return [];
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
