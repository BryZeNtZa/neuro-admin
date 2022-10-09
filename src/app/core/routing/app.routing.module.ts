import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthIndexComponent } from '@modules/auth/components/auth.index.component';
import { HomeIndexComponent } from '@modules/home/components/home.index.component';
import { AppLayoutComponent } from '@shared/layouts/layout/app.layout.component';

import { AppAuthGuard } from '../guards/app.auth.guard';

const routes: Routes = [
 {
    path: '',
    component: AppLayoutComponent,
    canActivate: [AppAuthGuard],
    children: [
      {
        path: 'users',
        loadChildren: () => import('@modules/users/users.module').then(m => m.UsersModule)
      },
    ]
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
