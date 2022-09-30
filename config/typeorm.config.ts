import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',

    // entities: [], // * use autoLoadEntities instead:
    autoLoadEntities: true,

    // migrations: ['./src/database/migrations/*.ts'],

    synchronize: false,
};
