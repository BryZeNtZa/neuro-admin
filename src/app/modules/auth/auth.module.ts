import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutesModule } from './auth.routes.module';

import { AngularMaterialModule } from '@shared/vendors/angular-material.module';
// Import widgets module
import { AppWidgetsModule } from '@shared/widgets/app.widgets.module';

import { AppLayoutsModule } from '@shared/layouts/app.layouts.module';

import { AuthLoginComponent } from './components/login/auth.login.component';
import { AuthRegisterComponent } from './components/register/auth.register.component';
import { AuthIndexComponent } from './components/auth.index.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AppWidgetsModule,
    AppLayoutsModule
  ],
  declarations: [
    AuthIndexComponent,
    AuthLoginComponent,
    AuthRegisterComponent
  ],
  exports: [
    CommonModule,
    AuthIndexComponent,
    AuthLoginComponent,
    AuthRegisterComponent,
    AuthRoutesModule,
  ]
})

export class AuthModule {}
