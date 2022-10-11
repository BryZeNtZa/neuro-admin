import { ApplicationRef, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule } from '@app/routing/app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppModules } from '@modules/app.modules';
import { AppRootComponent } from '@shared/layouts/root/app.root.component';

import { AppSharedModules } from '@shared/app.shared.modules';
import { AppServiceLocator } from '@app/app.service.locator';
import { AppCoreModules } from '@app/app.core.modules';
import { AppCoreComponent } from '@app/app.core.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    AppCoreModules.forRoot(),
    AppSharedModules.forRoot(),
    AppModules,
  ],
  declarations: [],
  providers: [AppCoreComponent],
  // bootstrap: [AppRootComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    AppServiceLocator.setInjector(this.injector);
  }

  // Bootstrap the application with the ngBootstrap
  ngDoBootstrap(app: ApplicationRef) {
    // Set the application custom DI injector
    AppServiceLocator.setInjector(this.injector);

    // Launch the application root component
    app.bootstrap(AppRootComponent);
  }
}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
