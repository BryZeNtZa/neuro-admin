import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TherapistCreateComponent } from './components/create/therapist.create.component';
import { TherapistListComponent } from './components/list/therapists.list.component';

export const routes: Routes = [
  {
    path: '',
    component: TherapistListComponent
  },
  {
    path: 'list',
    component: TherapistListComponent
  },
  {
    path: 'create',
    component: TherapistCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TherapistsRoutesModule {}
