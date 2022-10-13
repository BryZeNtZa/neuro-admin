import { Injectable } from '@angular/core';
import { AppApiClient } from '@app/http/app.api-client';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisAndTreatmentService {
  constructor(private api: AppApiClient) {}
}
