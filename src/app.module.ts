import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

// 根Module
@Module({
  imports: [UserModule],
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
