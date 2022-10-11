import { Injectable, OnInit } from '@angular/core';
import { AppAuthService } from '@modules/auth/services/app.auth.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AppServiceLocator } from './app.service.locator';

export enum AppStatus {
  LOADING,
  READY,
  SERVER_UNAVAILABLE,
}

/**
 * Add all useful components reusable by core components
 * in this class: translations, etc.
 */
@Injectable({
  providedIn: 'root'
})
export class AppCoreComponent {

  protected appStatus: AppStatus = AppStatus.LOADING;
  protected authService!: AppAuthService;
  protected translate!: TranslateService;

  constructor() {
    this.authService = AppServiceLocator.getInstance<AppAuthService>(AppAuthService);
    this.translate = AppServiceLocator.getInstance<TranslateService>(TranslateService);
    this.translate.setDefaultLang('en');
  }

}
