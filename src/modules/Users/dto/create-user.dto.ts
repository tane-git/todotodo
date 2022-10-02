import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Todo } from 'src/modules/Todo/todo.entity';

export class CreateUserDto {
    @ApiProperty()
    name: string;

    @ApiPropertyOptional()
    todos: Todo[];
}
