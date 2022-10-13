import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentsIndexComponent } from '@modules/appointments/components/appointments.index.component';
import { AuthIndexComponent } from '@modules/auth/components/auth.index.component';
import { DiagnosisAndTreatmentIndexComponent } from '@modules/diagnosis-treatment/components/diagnosis-treatment.index.component';
import { HomeIndexComponent } from '@modules/home/components/home.index.component';
import { PatientsIndexComponent } from '@modules/patients/components/patients.index.component';
import { TherapistsIndexComponent } from '@modules/therapists/components/therapists.index.component';
import { AppLayoutComponent } from '@shared/layouts/layout/app.layout.component';

import { AppAuthGuard } from '../guards/app.auth.guard';

const routes: Routes = [
 {
    path: '',
    component: AppLayoutComponent,
    canActivate: [AppAuthGuard],
  },
  {
    path: 'auth',
    component: AuthIndexComponent,
    loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    canActivate: [AppAuthGuard],
    component: HomeIndexComponent,
    loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'patients',
    canActivate: [AppAuthGuard],
    component: PatientsIndexComponent,
    loadChildren: () => import('@modules/patients/patients.module').then(m => m.PatientsModule)
  },
  {
    path: 'appointments',
    canActivate: [AppAuthGuard],
    component: AppointmentsIndexComponent,
    loadChildren: () => import('@modules/appointments/appointments.module').then(m => m.AppointmentsModule)
  },
  {
    path: 'therapists',
    canActivate: [AppAuthGuard],
    component: TherapistsIndexComponent,
    loadChildren: () => import('@modules/therapists/therapists.module').then(m => m.TherapistsModule)
  },
  {
    path: 'diagnosis-and-treatement',
    canActivate: [AppAuthGuard],
    component: DiagnosisAndTreatmentIndexComponent,
    loadChildren: () => import('@modules/diagnosis-treatment/diagnosis-treatment.module').then(m => m.DiagnosisAndTreatmentModule)
  },
  {
    path: 'configurations',
    component: DiagnosisAndTreatmentIndexComponent,
    canActivate: [AppAuthGuard],
    children: [
      {
        path: 'users',
        loadChildren: () => import('@modules/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'user-groups',
        loadChildren: () => import('@modules/users/users.module').then(m => m.UsersModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
