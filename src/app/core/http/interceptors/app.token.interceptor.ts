import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppAuthService } from '@modules/auth/services/app.auth.service';

@Injectable()
export class AppTokenInterceptor implements HttpInterceptor {
    constructor(private authService: AppAuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUser = this.authService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}

export let appTokenInterceptor = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppTokenInterceptor,
    multi: true
};
