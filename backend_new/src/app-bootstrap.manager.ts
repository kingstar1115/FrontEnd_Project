import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModuleBuilder } from '@nestjs/testing';
import { json } from 'express';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';
import { InternalServerErrorExceptionsFilter } from './common/filters/internal-server-error-exceptions.filter';

export class AppBootstrapManager {
  static getTestingModuleBuilder(): TestingModuleBuilder {
    return Test.createTestingModule({
      imports: [AppModule],
    });
  }

  static setAppDefaults(app: INestApplication): INestApplication {
    useContainer(app.select(AppModule), {
      fallbackOnErrors: true,
      fallback: true,
    });

    app
      .use(json({ limit: '50mb' }))
      .setGlobalPrefix('api/v1')
      .useGlobalFilters(new InternalServerErrorExceptionsFilter())
      .useGlobalPipes(
        new ValidationPipe({
          whitelist: true,
          validationError: {
            target: false,
          },
          stopAtFirstError: true,
        }),
      )
      .enableCors();

    return app;
  }
}
