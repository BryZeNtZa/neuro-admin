import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserUtils } from '@entity/User';
import { AppAuthService } from '@modules/auth/services/app.auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './app.layout.component.html',
  styleUrls: ['./app.layout.component.css']
})
export class AppLayoutComponent /*implements OnInit */ {

  constructor(
    private authService: AppAuthService,
    private router: Router) {}

  /*ngOnInit() {
    if(!UserUtils.isEmptyOrNull(this.authService.currentUserValue)) {
      console.log('Redirect to dashboard !!!');
      this.router.navigate(['/dashoard']);
    }
  }*/

}
