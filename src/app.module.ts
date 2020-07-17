import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { ExceptionModule } from './modules/exception/exception.module';
import { RoleGuardModule } from './modules/role-guard/role-guard.module';
import { CatsModule } from './modules/cat/cats.module';

import { MongooseModule } from '@nestjs/mongoose';

// 根Module
@Module({
  imports: [
    UserModule,
    ExceptionModule,
    RoleGuardModule,
    CatsModule,
    // 安装过程完成后，我们可以将其 MongooseModule 导入到根目录 AppModule 中。
    MongooseModule.forRoot('mongodb://123.207.220.13:27017/mall'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // 为 user 路由添加中间件
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'user', method: RequestMethod.POST })
      .forRoutes('user');
  }
}
