import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from '@shared/vendors/angular-material.module';
// Import widgets module
import { AppWidgetsModule } from '@shared/widgets/app.widgets.module';

import { AppLayoutsModule } from '@shared/layouts/app.layouts.module';
import { AppointmentsRoutesModule } from './appointments.routes.module';
import { AppointmentsIndexComponent } from './components/appointments.index.component';
import { AppointmentListComponent } from './components/list/appointments.list.component';

@NgModule({
  imports: [
    CommonModule,
    AppointmentsRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AppWidgetsModule,
    AppLayoutsModule
  ],
  declarations: [
    AppointmentsIndexComponent,
    AppointmentListComponent
  ],
  exports: [
    CommonModule,
    AppointmentsIndexComponent,
    AppointmentListComponent
  ]
})

export class AppointmentsModule {}
