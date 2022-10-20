import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentCreateComponent } from './components/create/appointment.create.component';
import { AppointmentListComponent } from './components/list/appointments.list.component';
import { AppointmentOutstandingComponent } from './components/outstanding/appointments.outstanding.component';

export const routes: Routes = [
  {
    path: '',
    component: AppointmentOutstandingComponent
  },
  {
    path: 'outstanding',
    component: AppointmentOutstandingComponent
  },
  {
    path: 'history',
    component: AppointmentListComponent
  },
  {
    path: 'create',
    component: AppointmentCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutesModule {}
