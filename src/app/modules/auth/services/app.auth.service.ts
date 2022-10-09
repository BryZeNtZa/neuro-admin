import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, of, map, catchError } from 'rxjs';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';

import { RegisterDto, User, UserUtils } from '@entity/User';
import { AppApiClient } from '@app/http/app.api-client';
import { DtoInterface } from '@dto/DtoInterface';

const USER_LS_KEY = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class AppAuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private api: AppApiClient) {
    const userData = localStorage.getItem(USER_LS_KEY);
    if(userData !== null) {
      this.currentUserSubject = new BehaviorSubject<User>(UserUtils.getFromData(userData));
      this.currentUser = this.currentUserSubject.asObservable();
    }
    else {
      this.currentUserSubject = new BehaviorSubject<User>(UserUtils.getEmpty());
      this.currentUser = this.currentUserSubject.asObservable();
    }
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public register(userDto: DtoInterface<RegisterDto>): Observable<User> {
    console.log('attempting to register : ', userDto);
    return this.api.post<User>('auth/register', userDto)
        .pipe( catchError(this.errorHandler) );
  }

  public login(username: string, password: string): Observable<User> {
    return this.api.post<User>('auth/token', { email: username, password })
        .pipe(
          map((user: User) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(USER_LS_KEY, JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
          }),
          catchError(this.errorHandler)
        );
  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(USER_LS_KEY);
    this.currentUserSubject.next(UserUtils.getEmpty());
  }

  errorHandler(error: Error) {
    console.log('Error login : ', error);
    let message: string = 'An error occured';
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        message = `Bad request: ${error.statusText}`;
      } else {
        message = `Unable the join the server, check your internet connection`;
        switch (error.status) {
          case HttpStatusCode.BadRequest:
            message = `Bad request: ${error.statusText}`;
            break;
          case HttpStatusCode.Forbidden:
            message = `Forbidden: ${error.statusText}`;
            break;
          case HttpStatusCode.Unauthorized:
            message = `Unauthorized: ${error.statusText}`;
            break;
          case HttpStatusCode.InternalServerError:
            message = `Internal Server Error: ${error.statusText}`;
            break;
        }
      }
    }
    else {
      message = `Unable the join the server, check your internet connection`;
    }
    return throwError(() => new Error(message));
  }
}
