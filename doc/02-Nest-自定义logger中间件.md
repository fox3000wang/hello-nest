# 自定义 logger 中间件

## 中间件的概念

https://docs.nestjs.com/middleware

![](https://docs.nestjs.com/assets/Middlewares_1.png)

## 自定义一个在每次请求的时候打 log 的中间件

```js
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { method, path } = req;
    console.log(`${method} ${path}`);
    next();
  }
}
```

## 为指定路由添加中间件

```js
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // 为 user 路由添加中间件
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'user', method: RequestMethod.POST })
      .forRoutes('user');
  }
}
```
