import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { PatientsModule } from './patients/patients.module';
import { TherapistsModule } from './therapists/therapists.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { DiagnosisAndTreatmentModule } from './diagnosis-treatment/diagnosis-treatment.module';

@NgModule({
  imports: [
    CommonModule,
    UsersModule,
    AuthModule,
    HomeModule,
    PatientsModule,
    TherapistsModule,
    AppointmentsModule,
    DiagnosisAndTreatmentModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    UsersModule,
    AuthModule,
    HomeModule,
    PatientsModule,
    TherapistsModule,
    AppointmentsModule,
    DiagnosisAndTreatmentModule
  ]
})
export class AppModules {}
