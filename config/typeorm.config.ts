import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Todo } from '../src/modules/Todo/todo.entity';
import { User } from '../src/modules/Users/user.entity';
import { dataSourceOptions } from './dataSource';

export const typeOrmConfig: TypeOrmModuleOptions = {
    ...dataSourceOptions,

    // ? autoLoadEnttiies doesnt seem to work:
    // autoLoadEntities: true,

    // entities: [Todo, User],
};
