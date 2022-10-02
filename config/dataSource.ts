import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: ['dist/src/**/*.entity.js'],
    migrations: ['dist/src/database/migrations/*.js'],
};

export const dataSource = new DataSource(dataSourceOptions);
