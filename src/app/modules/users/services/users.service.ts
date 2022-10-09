import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AppGlobalSettings } from '@shared/settings/app.global.settings';
import { User } from '@entity/User';

import { AppJsonApiService } from '@app/http/app.json-api.service';

@Injectable({ providedIn: 'root' })
export class UsersService {

    constructor(private http: HttpClient, private jsonApiService: AppJsonApiService) { }

    getAll() {
        return this.http.get<User[]>(`${AppGlobalSettings.apiUrl}/users`);
    }

    getSingle(id: number): Observable<User> {
        return this.http.get<User>(`${AppGlobalSettings.apiUrl}/users:${id}`);
    }

    getAllDatas(): Observable<Array<User>> {
        return this.jsonApiService.getDatas('users');
    }

    getSingleData(id: number): Observable<User> {
        return this.jsonApiService.getSingleData('users', id);
    }
}
