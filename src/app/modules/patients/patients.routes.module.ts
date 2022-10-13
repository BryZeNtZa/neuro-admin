import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsCreateComponent } from './components/create/patients.create.component';
import { PatientsListComponent } from './components/list/patients.list.component';

export const routes: Routes = [
  {
    path: '',
    component: PatientsListComponent
  },
  {
    path: 'list',
    component: PatientsListComponent
  },
  {
    path: 'create',
    component: PatientsCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutesModule {}
