import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  auth_token = "9798787878276378sd3";
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenReq = request.clone({
      setHeaders : {
         'Authorization' : `Bearer ${this.auth_token}`,
         'Content-Type' : 'application/json'
      }
    })
    return next.handle(tokenReq).pipe(
      retry(1),
      catchError((err:HttpErrorResponse) => {
        console.log('Route facing issue');
        return throwError(err.message)
      })
    );
  }
}
