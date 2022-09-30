import { Todo } from '../src/todo/todo.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    // entities: ['./src/**/*.entity.ts'],
    entities: [Todo],
    migrations: ['src/database/migrations/*.ts'],
};

export const dataSource = new DataSource(dataSourceOptions);
