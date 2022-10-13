import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from '@shared/vendors/angular-material.module';
// Import widgets module
import { AppWidgetsModule } from '@shared/widgets/app.widgets.module';

import { AppLayoutsModule } from '@shared/layouts/app.layouts.module';
import { DiagnosisAndTreatmentRoutesModule } from './diagnosis-treatment.routes.module';
import { DiagnosisAndTreatmentIndexComponent } from './components/diagnosis-treatment.index.component';

@NgModule({
  imports: [
    CommonModule,
    DiagnosisAndTreatmentRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AppWidgetsModule,
    AppLayoutsModule
  ],
  declarations: [
    DiagnosisAndTreatmentIndexComponent,
  ],
  exports: [
    CommonModule,
    DiagnosisAndTreatmentIndexComponent,
  ]
})

export class DiagnosisAndTreatmentModule {}
