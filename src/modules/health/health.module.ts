import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';
import { DogHealthIndicator } from './dog.health';

// 健康检查 https://docs.nestjs.cn/7/recipes?id=%e5%81%a5%e5%ba%b7%e6%a3%80%e6%9f%a5terminus
@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
  providers: [DogHealthIndicator],
})
export class HealthModule {}
