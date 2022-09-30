import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'webapp/config/typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodoModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// react TSX/JSX component
export default function asdad (input: dasd) {
  const stringasda = stringDate(input)
  return  (
    <p>
      {stringasda}
    </p>
  )
}

//
export function stringDate(input:aasdas): string {
  return `asdadas${dasdas}`
}