import { Injectable } from '@angular/core';
import { AppApiClient } from '@app/http/app.api-client';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  constructor(private api: AppApiClient) {}
}
