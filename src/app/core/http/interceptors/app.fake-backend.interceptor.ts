import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { User } from '@entity/User';
import { AppJsonApiService } from '../app.json-api.service';

@Injectable({providedIn: 'root'})
export class AppFakeBackendInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        // NB: pipe materialize and dematerialize to ensure delay
        // even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // route functions
        function authenticate() {

            const users = AppJsonApiService.loadData('users');
            // const users = usersJSON['users'];

            console.log('Users array length : ' + JSON.stringify(users));
            console.log('Authentication in progress ...');
            const { username, password } = body;
            // const user = users.find(x => x.username === username && x.password === password);
            const user:User = users[0];

            if (!user) {
                return error('Username or password is incorrect');
            }

            return ok(user);
        }

        function getUsers() {
            if (!isLoggedIn()) {
                return unauthorized();
            }

            const users: User[] = AppJsonApiService.loadData('users');
            // return of(users);
            return of(new HttpResponse({ status: 200, body: users }));
        }

        // helper functions
        function ok(body?: User) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function error(message: string) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
    }
}

export let appFakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: AppFakeBackendInterceptor,
    multi: true
};
