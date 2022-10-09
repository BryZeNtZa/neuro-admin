import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '@app/routing/app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppModules } from '@modules/app.modules';
import { AppRootComponent } from '@shared/layouts/root/app.root.component';

import { AppSharedModules } from '@shared/app.shared.modules';
import { AppServiceLocator } from '@app/app.service.locator';
import { AppCoreModules } from '@app/app.core.modules';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppCoreModules.forRoot(),
    AppSharedModules.forRoot(),
    AppModules,
  ],
  providers: [],
  bootstrap: [AppRootComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    // Service locator for manual injection
    AppServiceLocator.setInjector(this.injector);
  }
}
