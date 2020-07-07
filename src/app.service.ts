/*
  Providers,其实就是Services, 服务
  服务主要用于处理一些负责的业务逻辑或者处理一些数据
*/
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }
}
