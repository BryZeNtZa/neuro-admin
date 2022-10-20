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
import { AppointmentCreateComponent } from './components/create/appointment.create.component';
import { EnumValue } from '@shared/helpers/enum.pipe';
import { AppointmentStatus } from '@entity/Appointment';
import { AppointmentOutstandingComponent } from './components/outstanding/appointments.outstanding.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    AppointmentsRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AppWidgetsModule,
    AppLayoutsModule,
    MatDatepickerModule,
  ],
  declarations: [
    AppointmentsIndexComponent,
    AppointmentListComponent,
    AppointmentCreateComponent,
    AppointmentOutstandingComponent,
  ],
  exports: [
    CommonModule,
    AppointmentsIndexComponent,
    AppointmentListComponent,
    AppointmentCreateComponent,
    AppointmentOutstandingComponent,
  ],
})

export class AppointmentsModule {}
