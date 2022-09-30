import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/typeorm.config';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './modules/todo/todo.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(typeOrmConfig),
        // TypeOrmModule.forRoot({
        //     type: 'postgres',
        //     host: 'localhost',
        //     port: 5432,
        //     username: 'postgres',
        //     password: 'postgres',
        //     database: 'postgres',

        //     // entities: [], // * use autoLoadEntities instead:
        //     autoLoadEntities: true,

        //     // migrations: ['./src/database/migrations/*.ts'],

        //     synchronize: false,
        // }),

        TodoModule,
        //
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(private dataSource: DataSource) {}
}
