import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AngularMaterialModule } from '@shared/vendors/angular-material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppWidgetsModule } from '@shared/widgets/app.widgets.module';

import { AppRootComponent } from './root/app.root.component';
import { AppLayoutComponent } from './layout/app.layout.component';

// nav-bar components
import { AppNavComponent } from './nav/app.nav.component';
import { AppLogoComponent } from './nav/logo/app.nav.logo';
import { AppMenuComponent } from './nav/menu/app.nav.menu';
import { AppUserProfileComponent } from './nav/user-profile/app.nav.user-profile';

// footer component
import { AppFooterComponent } from './footer/app.footer.component';

import { AppSplashComponent } from './splash/app.splash.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    FontAwesomeModule,
    AppWidgetsModule,
    NgbModule,
  ],
  declarations: [
    AppRootComponent,
    AppLayoutComponent,
    AppNavComponent,
    AppLogoComponent,
    AppMenuComponent,
    AppUserProfileComponent,
    AppFooterComponent,
    AppSplashComponent
  ],
  exports: [
    AppRootComponent,
    AppLayoutComponent,
    AppNavComponent,
    AppLogoComponent,
    AppMenuComponent,
    AppUserProfileComponent,
    AppFooterComponent,
    AppSplashComponent
  ]
})
export class AppLayoutsModule {}
