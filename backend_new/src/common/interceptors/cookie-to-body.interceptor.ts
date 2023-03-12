import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class CookieToBodyInterceptor implements NestInterceptor {
  public cookieName: string;
  public bodyAttributeName: string;

  constructor(cookieName: string, bodyAttributeName: string) {
    this.cookieName = cookieName;
    this.bodyAttributeName = bodyAttributeName;
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request: Request = context.switchToHttp().getRequest();

    if (request?.cookies && this.cookieName in request.cookies) {
      request.body[this.bodyAttributeName] = request.cookies[this.cookieName];
    }

    return next.handle().pipe();
  }
}
