import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// import { dataSourceOptions } from './dataSource';

// export const typeOrmConfig: TypeOrmModuleOptions = {
//     ...dataSourceOptions,
//     synchronize: true,
// };

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    // entities: ['./src/**/*.entity.ts'],
    migrations: ['src/database/migrations/*.ts'],

    // autoLoadEntities: true,
    // synchronize: true,
};
