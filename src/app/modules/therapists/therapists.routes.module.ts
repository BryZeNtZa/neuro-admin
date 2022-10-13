import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TherapistListComponent } from './components/list/therapists.list.component';

export const routes: Routes = [
  {
    path: '',
    component: TherapistListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TherapistsRoutesModule {}
