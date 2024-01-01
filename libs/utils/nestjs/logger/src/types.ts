import { LogLevel } from '@learn/util/logger';

export interface LoggerMetadata {
  service: string;
}

export const LEARN_LOGGER_MODULE_OPTIONS = 'LEARN_LOGGER_MODULE_OPTIONS';

export interface LearnLoggerModulesOptions {
  component: string;
  logLevel?: LogLevel;
  isProduction?: boolean;
  metadata?: Record<string, unknown>;
}
