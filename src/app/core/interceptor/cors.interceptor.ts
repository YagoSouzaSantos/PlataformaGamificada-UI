import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CorsInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedRequest = request.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD, TRACE, CONNECT',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });

    return next.handle(modifiedRequest);
  }
}
