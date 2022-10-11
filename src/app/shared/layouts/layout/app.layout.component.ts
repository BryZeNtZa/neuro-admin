import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppCoreComponent, AppStatus } from '@app/app.core.component';
import { User, UserUtils } from '@entity/User';
import { AppAuthService } from '@modules/auth/services/app.auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './app.layout.component.html',
  styleUrls: ['./app.layout.component.css']
})
export class AppLayoutComponent extends AppCoreComponent implements OnInit {

  constructor() {
    super();
  }

  getAppStatus(): number {
    return this.appStatus;
  }

  ngOnInit() {
    console.log('APP LAYOUT INILITIALIZED !');
  }

}
