/*
  项目的入口
*/
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationPipe } from './common/pipes/validation.pipe';

async function bootstrap() {
  // https://docs.nestjs.com/techniques/logger
  const app = await NestFactory.create(AppModule, {
    //logger: false,
    //logger: ['error', 'warn'],
    //logger: console,
  });

  // 全局使用中间件
  // app.use(logger)

  // 全局过滤器
  // app.useGlobalFilters(new HttpExceptionFilter());

  // 全局管道
  // app.useGlobalPipes(new ValidationPipe());

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
