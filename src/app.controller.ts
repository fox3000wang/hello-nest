/*
  Controller 控制器负责处理传入的请求，并返回对客户端的响应

  @Request()	req
  @Response(), @Res()*	res
  @Next()	next
  @Session()	req.session
  @Param(key?: string)	req.params / req.params[key]
  @Body(key?: string)	req.body / req.body[key]
  @Query(key?: string)	req.query / req.query[key]
  @Headers(name?: string)	req.headers / req.headers[name]
  @Ip()	req.ip
*/

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 默认的根路由
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // get方法返回
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
