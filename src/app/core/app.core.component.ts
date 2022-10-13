import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@entity/User';
import { AppAuthService } from '@modules/auth/services/app.auth.service';
import { TranslateService } from '@ngx-translate/core';
import { AppStatus } from '@shared/interfaces/IAppStatus';
import { ISession } from '@shared/interfaces/ISession';
import { AppFormService } from '@shared/services/app.form.service';
import { AppSnackBarComponent } from '@shared/widgets/snackbar/app.snackbar.widget';
import { AppServiceLocator } from './app.service.locator';

/**
 * Add all useful components reusable by core components
 * in this class: translations, etc.
 */
@Injectable({
  providedIn: 'root'
})
export class AppCoreComponent {

  protected session!: ISession;
  protected appStatus!: AppStatus;
  protected authService!: AppAuthService;
  protected translate!: TranslateService;
  protected router!: Router;
  protected route!: ActivatedRoute;
  protected form!: FormBuilder;
  protected formService!: AppFormService;
  protected snackbar!: AppSnackBarComponent;

  constructor() {
    this.session = {user: null};
    this.appStatus = AppStatus.LOADING;
    this.authService = AppServiceLocator.getInstance<AppAuthService>(AppAuthService);
    this.translate = AppServiceLocator.getInstance<TranslateService>(TranslateService);
    this.router = AppServiceLocator.getInstance<Router>(Router);
    this.route = AppServiceLocator.getInstance<ActivatedRoute>(ActivatedRoute);
    this.form = AppServiceLocator.getInstance<FormBuilder>(FormBuilder);
    this.formService = AppServiceLocator.getInstance<AppFormService>(AppFormService);
    this.snackbar = AppServiceLocator.getInstance<AppSnackBarComponent>(AppSnackBarComponent);

    this.translate.setDefaultLang('en');
  }

  getAppStatus(): number {
    return this.appStatus;
  }

  createSession(user: User): void {
    this.appStatus = AppStatus.SESSION_ACTIVE;
    this.session.user = user;
  }

  refreshSession() {
    if(this.authService.getSessionData() !== null) {
      this.appStatus = AppStatus.SESSION_ACTIVE;
    }
    else {
      this.appStatus = AppStatus.SESSION_INACTIVE;
    }
  }
}
