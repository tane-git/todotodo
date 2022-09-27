import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
    imports: [TodoModule, TypeOrmModule.forRoot(typeOrmConfig)],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
