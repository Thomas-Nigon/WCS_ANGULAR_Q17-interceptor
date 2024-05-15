// src/app/core/log-interceptor.service.ts
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Intercepted request URL:', req.urlWithParams); // Display the URL with params
    const start: number = Date.now();
    return next.handle(req).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            console.log('Received an HttpResponse:', event);
            const end: number = Date.now();
            const requestLength: number = end - start;
            console.log(`request took:${requestLength}ms`);
          }
        },
        error: (error) => {
          console.error('Error in interceptor:', error);
        },
      })
    );
  }
}
