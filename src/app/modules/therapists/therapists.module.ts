import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from '@shared/vendors/angular-material.module';
// Import widgets module
import { AppWidgetsModule } from '@shared/widgets/app.widgets.module';

import { AppLayoutsModule } from '@shared/layouts/app.layouts.module';
import { TherapistsRoutesModule } from './therapists.routes.module';
import { TherapistsIndexComponent } from './components/therapists.index.component';
import { TherapistListComponent } from './components/list/therapists.list.component';
import { TherapistCreateComponent } from './components/create/therapist.create.component';

@NgModule({
  imports: [
    CommonModule,
    TherapistsRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AppWidgetsModule,
    AppLayoutsModule
  ],
  declarations: [
    TherapistsIndexComponent,
    TherapistListComponent,
    TherapistCreateComponent,
  ],
  exports: [
    CommonModule,
    TherapistsIndexComponent,
    TherapistListComponent,
    TherapistCreateComponent,
  ]
})

export class TherapistsModule {}
