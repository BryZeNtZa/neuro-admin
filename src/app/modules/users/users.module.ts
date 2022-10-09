import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMaterialModule } from '@shared/vendors/angular-material.module';

import { UsersModuleRoutes } from './users.module.routes';

import { UsersIndexComponent } from './components/index/users.index.component';

import { AddUserComponent } from './components/add-user/users.add-user.component';
import { ListUsersComponent } from './components/list-users/users.list-users.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AngularMaterialModule,
    UsersModuleRoutes,
  ],
  declarations: [
    UsersIndexComponent,
    AddUserComponent,
    ListUsersComponent,
  ],
  exports: [
    CommonModule,
    UsersIndexComponent,
    AddUserComponent,
    ListUsersComponent,
  ],
  entryComponents: [ UsersIndexComponent ],
})
export class UsersModule {}
