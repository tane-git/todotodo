import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/typeorm.config';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from '../Todo/todo.module';
import { UsersModule } from '../Users/users.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(typeOrmConfig),
        //
        TodoModule,
        UsersModule,
        //
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(private dataSource: DataSource) {}
}
