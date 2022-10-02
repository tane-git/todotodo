import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User } from 'src/modules/Users/user.entity';

export class CreateTodoDto {
    @ApiProperty()
    label: string;

    @ApiPropertyOptional()
    isUrgent: boolean;

    @ApiPropertyOptional()
    isImportant: boolean;

    @ApiPropertyOptional()
    isComplete: boolean;

    @ApiPropertyOptional()
    users: User[];
}
