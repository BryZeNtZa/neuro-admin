import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    CommonModule,
    UsersModule,
    AuthModule,
    HomeModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    UsersModule,
    AuthModule,
    HomeModule
  ]
})
export class AppModules {}
