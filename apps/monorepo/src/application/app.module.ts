import { BaseAppModule, LoggingInterceptor } from '@nx-pnpm-monorepo/common';
import { Module, Provider } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const globalInterceptor: Provider[] = [
  {
    provide: APP_INTERCEPTOR,
    useClass: LoggingInterceptor,
  },
];
@Module({
  imports: [BaseAppModule],
  controllers: [AppController],
  providers: [AppService, ...globalInterceptor],
})
export class AppModule {}
