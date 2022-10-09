import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppGlobalSettings as config } from '@shared/settings/app.global.settings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppApiClient {

  constructor(private http: HttpClient){}

  public post<T>(endpoint: string, data: any, ): Observable<T> {
    return this.http.post<T>(`${config.apiUrl}/${endpoint}`, data);
  }
}
