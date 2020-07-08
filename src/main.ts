/*
  项目的入口
*/
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // https://docs.nestjs.com/techniques/logger
  const app = await NestFactory.create(AppModule, {
    //logger: false,
    //logger: ['error', 'warn'],
    //logger: console,
  });

  // 全局使用中间件
  // app.use(logger)

  // for Swagger https://github.com/nestjs/swagger
  const options = new DocumentBuilder()
    .setTitle('Vita example')
    .setDescription('The vita API description')
    .setVersion('1.0')
    .addTag('vita')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(9999);
}
bootstrap();
