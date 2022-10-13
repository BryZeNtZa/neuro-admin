import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from '@shared/vendors/angular-material.module';
// Import widgets module
import { AppWidgetsModule } from '@shared/widgets/app.widgets.module';

import { AppLayoutsModule } from '@shared/layouts/app.layouts.module';
import { PatientsRoutesModule } from './patients.routes.module';
import { PatientsIndexComponent } from './components/patients.index.component';
import { PatientsListComponent } from './components/list/patients.list.component';
import { PatientsCreateComponent } from './components/create/patients.create.component';

@NgModule({
  imports: [
    CommonModule,
    PatientsRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AppWidgetsModule,
    AppLayoutsModule
  ],
  declarations: [
    PatientsIndexComponent,
    PatientsListComponent,
    PatientsCreateComponent,
  ],
  exports: [
    CommonModule,
    PatientsIndexComponent,
    PatientsListComponent,
    PatientsCreateComponent,
  ]
})

export class PatientsModule {}
