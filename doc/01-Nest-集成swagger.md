# 集成 swagger

```shell
npm install @nestjs/swagger
```

main.js 项目入口

```js
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
```

## 相关文档

https://github.com/nestjs/swagger

https://docs.nestjs.com/recipes/swagger
