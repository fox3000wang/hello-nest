/*
  Controller 控制器负责处理传入的请求，并返回对客户端的响应
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
