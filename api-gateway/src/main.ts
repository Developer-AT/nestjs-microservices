import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/products')
  const config = new DocumentBuilder()
    .setTitle('Microservice example')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('Microservice')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000, () => logger.log('App Listen to port 3000'));
}
bootstrap();
