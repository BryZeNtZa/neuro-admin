import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserUtils } from '@entity/User';
import { AppAuthService } from '@modules/auth/services/app.auth.service';

@Component({
  selector: 'app-content',
  templateUrl: './app.content.component.html',
  styleUrls: ['./app.content.component.css']
})
export class AppContentComponent /*implements OnInit */ {

  moduleName: string = 'Dashboard';

  constructor(
    private authService: AppAuthService,
    private router: Router) {}

}
