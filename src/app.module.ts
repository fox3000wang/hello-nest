import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { ExceptionModule } from './modules/exception/exception.module';
import { RoleGuardModule } from './modules/role-guard/role-guard.module';
import { CatsModule } from './modules/cat/cats.module';
import { UserModule } from './modules/user/user.module';
import { HealthModule } from './modules/health/health.module';

// 根Module
@Module({
  imports: [
    // 安装过程完成后，我们可以将其 MongooseModule 导入到根目录 AppModule 中。
    MongooseModule.forRoot('mongodb://123.207.220.13:27017/mall'),
    UserModule,
    ExceptionModule,
    RoleGuardModule,
    CatsModule,
    HealthModule,
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
