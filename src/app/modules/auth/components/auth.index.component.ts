import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppAuthService } from '../services/app.auth.service';
import { User, UserUtils } from '@entity/User';

@Component({
  template: '<router-outlet></router-outlet>'
})
export class AuthIndexComponent {
  constructor(
    private router: Router,
    private authService: AppAuthService,
  ) {
    // redirect to home if already logged in
    /*const currentUser: User = this.authService.currentUserValue;
    if (!UserUtils.isEmptyOrNull(currentUser)) {
      this.router.navigate(['/']);
    }*/
  }
}
