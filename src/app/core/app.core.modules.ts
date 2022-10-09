import { NgModule, ModuleWithProviders, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import our routing module
import { AppRoutingModule } from './routing/app.routing.module';

// Import our http interceptors
import { AppTokenInterceptor } from './http/interceptors/app.token.interceptor';
import { AppFakeBackendInterceptor } from './http/interceptors/app.fake-backend.interceptor';
import { AppErrorInterceptor } from './http/interceptors/app.error.interceptor';

// Import our routes guards
import { AppAuthGuard } from './guards/app.auth.guard';
import { AppNoAuthGuard } from './guards/app.no-auth.guard';

// Import our custom service locator for DI purpose
import { AppServiceLocator } from './app.service.locator';
import { AppApiClient } from './http/app.api-client';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class AppCoreModules {
  static forRoot() {
    return {
      ngModule: AppCoreModules,
      providers: [
        AppApiClient,
        AppTokenInterceptor,
        AppFakeBackendInterceptor,
        AppErrorInterceptor,
        AppAuthGuard,
        AppNoAuthGuard,
        AppServiceLocator
      ]
    };
  }
}
