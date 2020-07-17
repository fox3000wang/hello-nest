import { HealthCheckService, HealthCheck } from '@nestjs/terminus';
import { Controller, Injectable, Get } from '@nestjs/common';
import { DogHealthIndicator } from './dog.health';

@Controller('health')
@Injectable()
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private dogHealthIndicator: DogHealthIndicator
  ) {}

  @Get()
  @HealthCheck()
  healthCheck() {
    return this.health.check([
      async () => this.dogHealthIndicator.isHealthy('dog'),
    ]);
  }
}
