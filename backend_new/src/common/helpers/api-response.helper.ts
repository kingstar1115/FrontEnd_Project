/* eslint-disable @typescript-eslint/ban-types */
import { HttpStatus, Type } from '@nestjs/common';
import { ApiResponseOptions } from '@nestjs/swagger';

export class ApiResponseHelper {
  static success(
    type: Type<unknown> | Function | [Function] | string,
    httpCode: number = HttpStatus.OK,
  ): ApiResponseOptions {
    return { status: httpCode, type, description: 'Successful operation' };
  }

  static successWithExample(
    example: any,
    httpCode: number = HttpStatus.OK,
  ): ApiResponseOptions {
    return {
      status: httpCode,
      schema: { example },
      description: 'Successful operation',
    };
  }

  static created(
    type: Type<unknown> | Function | [Function] | string = '',
  ): ApiResponseOptions {
    return {
      status: HttpStatus.CREATED,
      type,
      description: 'Successfully created',
    };
  }

  static validationError(errorMessage: string): ApiResponseOptions {
    const schemaExample = {
      statusCode: HttpStatus.BAD_REQUEST,
      message: [errorMessage],
      error: 'Bad Request',
    };

    return {
      status: HttpStatus.BAD_REQUEST,
      description: 'Validation error',
      schema: { example: schemaExample },
    };
  }

  static validationErrors(errorMessage: string[]): ApiResponseOptions {
    const schemaExample = {
      statusCode: HttpStatus.BAD_REQUEST,
      message: [...errorMessage],
      error: 'Bad Request',
    };

    return {
      status: HttpStatus.BAD_REQUEST,
      description: 'Validation error',
      schema: { example: schemaExample },
    };
  }

  static unauthorized(): ApiResponseOptions {
    const schemaExample = {
      statusCode: HttpStatus.UNAUTHORIZED,
      error: 'Unauthorized',
    };

    return {
      status: HttpStatus.UNAUTHORIZED,
      description: 'Unauthorized',
      schema: { example: schemaExample },
    };
  }

  static notFound(notFoundError = 'Not found'): ApiResponseOptions {
    const schemaExample = {
      statusCode: HttpStatus.NOT_FOUND,
      error: notFoundError,
    };

    return {
      status: HttpStatus.NOT_FOUND,
      description: 'Successfully created',
      schema: { example: schemaExample },
    };
  }
}
