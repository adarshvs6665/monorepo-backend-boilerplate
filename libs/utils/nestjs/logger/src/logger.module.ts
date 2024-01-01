import { DynamicModule, Global, Module } from '@nestjs/common';
import { LearnLogger } from './logger.service';
import {
  LEARN_LOGGER_MODULE_OPTIONS,
  LearnLoggerModulesOptions,
} from './types';

@Global()
@Module({})
export class LearnLoggerModule {
  static forRoot(options: LearnLoggerModulesOptions): DynamicModule {
    return {
      module: LearnLoggerModule,
      providers: [
        {
          provide: LEARN_LOGGER_MODULE_OPTIONS,
          useValue: options,
        },
        LearnLogger,
      ],
      exports: [LearnLogger],
    };
  }
}
