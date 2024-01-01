# util-nestjs-logger

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build util-nestjs-logger` to build the library.

## Running unit tests

Run `nx test util-nestjs-logger` to execute the unit tests via [Jest](https://jestjs.io).


# Learn NestJS Logger Module

The `@learn/util/nestjs/logger` is our official logger module. This library leverage, under the hood, the framework-agnostic Learn logging library `@learn/util/logging`.

All nestjs services at Learn must use this library to ensure consistent logging. This will enable us to trace and observe our systems reliably.

## Getting started

### Consume the module

In your microservices, import the logger module and consume it in your root module.

```ts
// app.module.ts

import { LearnLoggerModule } from '@learn/util/nestjs/logger';

@Module({
  imports: [
    //...
    LearnLoggerModule.forRoot({
      component: SERVICE_NAME,
    }),
    //...
  ],
})
export class AppModule implements // ....
```

The minimum log level can be configured also with the `LOG_LEVEL` environment variable, instead of the `logLevel: LogLevel.Warn`, to one of the following values:
- `debug`
- `info`
- `warn`
- `error`


### Usage

You can import the logger via dependency injection.

```ts
// example.service.ts

import {
  LearnLogger,
} from "@learn/util/nestjs/logger";

@Injectable()
export class ExampleService {
  constructor(
    @Inject(LearnLogger)
    private readonly logger: LearnLogger
  ) {}

  someMethod() {
    this.logger.debug("This is a debug log", { some: "context" });
    this.logger.info("This is a info log", { some: "context" });
    this.logger.warn("This is a warn log", { some: "context" });
    this.logger.error("This is a error log", { some: "context" });
  }
}
```


## Testing utils

A mocked provider can be used in unit tests. 
The following example explain how to use it

```ts
/// myservice.spec.ts

import { MockedLearnLoggerProvider } from "@learn/util/nestjs/logger/test-utils";

//...
 const module: TestingModule = await Test.createTestingModule({
      providers: [
        // ... 
        MockedLearnLoggerProvider,
        // ...
      ]
      //...
 }).compile();
//...
```