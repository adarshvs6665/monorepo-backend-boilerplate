import { NestFactory } from '@nestjs/core';
import { Logger } from '@learn/util/logger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;

  new Logger({ component: 'SERVICE_NAME', isProduction: true }).info(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
