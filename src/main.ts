import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    //* Swagger:
    const config = new DocumentBuilder()
        .setTitle('Todos Example')
        .setDescription('todotodos api docs')
        .setVersion('1.0')
        .addTag('todos')
        .addTag('users')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    //*

    await app.listen(3000);
}
bootstrap();
