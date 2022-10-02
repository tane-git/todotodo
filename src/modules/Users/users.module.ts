import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from '../Todo/todo.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        TodoModule,
        //
    ],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
