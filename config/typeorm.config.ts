import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Todo } from 'src/todo/todo.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: [Todo],
  migrations: [],
  //   migrationsTableName: '',
  //   entities: ['dist/src/**/*.entity.js'],
  //   autoLoadEntities: true,
  //   synchronize: true,
};
