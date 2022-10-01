import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { dataSourceOptions } from './dataSource';

export const typeOrmConfig: TypeOrmModuleOptions = {
    ...dataSourceOptions,
};
