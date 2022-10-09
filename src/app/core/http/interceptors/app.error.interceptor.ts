import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AppAuthService } from '@modules/auth/services/app.auth.service';

@Injectable()
export class AppErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AppAuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authService.logout();
                location.reload();
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}

export let appErrorInterceptor = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppErrorInterceptor,
    multi: true
};
