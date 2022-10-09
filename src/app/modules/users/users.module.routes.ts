import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersIndexComponent } from './components/index/users.index.component';
import { AddUserComponent } from './components/add-user/users.add-user.component';
import { ListUsersComponent } from './components/list-users/users.list-users.component';

export const routes: Routes = [
  {
    path: '',
    component: UsersIndexComponent,
    children: [
      {
        path: 'create',
        component: AddUserComponent,
      },
      {
        path: 'list',
        component: ListUsersComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersModuleRoutes {}
