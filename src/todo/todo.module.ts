import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoService],
  providers: [TodoService],
})
export class TodoModule {}
