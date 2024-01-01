import { LearnLogger } from '../../src/logger.service';

export const MockedLearnLoggerProvider = {
  provide: LearnLogger,
  useClass: jest.fn(() => ({
    debug: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
    child: jest.fn(),
  })),
};
