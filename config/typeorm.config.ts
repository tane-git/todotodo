import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Todo } from 'src/modules/todo/todo.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',

    entities: [Todo],
    // entities: [], // * use autoLoadEntities instead:
    // autoLoadEntities: true,

    // migrations: ['./src/database/migrations/*.ts'],

    // synchronize: false,
};
