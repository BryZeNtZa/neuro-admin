import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagnosisAndTreatmentListComponent } from './components/list/diagnosis-treatment.list.component';

export const routes: Routes = [
  {
    path: '',
    component: DiagnosisAndTreatmentListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnosisAndTreatmentRoutesModule {}
