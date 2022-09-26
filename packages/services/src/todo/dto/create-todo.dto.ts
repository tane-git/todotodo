import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty()
  label: string;

  @ApiPropertyOptional()
  isUrgent: boolean;

  @ApiPropertyOptional()
  isImportant: boolean;

  @ApiPropertyOptional()
  isComplete: boolean;
}
