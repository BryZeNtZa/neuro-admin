import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from '@shared/vendors/angular-material.module';
// Import widgets module
import { AppWidgetsModule } from '@shared/widgets/app.widgets.module';

import { AppLayoutsModule } from '@shared/layouts/app.layouts.module';
import { HomeRoutesModule } from './home.routes.module';
import { HomeIndexComponent } from './components/home.index.component';
import { HomeDashboardComponent } from './components/dashboard/home.dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AppWidgetsModule,
    AppLayoutsModule
  ],
  declarations: [
    HomeIndexComponent,
    HomeDashboardComponent
  ],
  exports: [
    CommonModule,
    HomeIndexComponent,
    HomeDashboardComponent,
    HomeRoutesModule,
  ]
})

export class HomeModule {}
