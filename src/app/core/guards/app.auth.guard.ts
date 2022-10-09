import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User, UserUtils } from '@entity/User';
import { AppAuthService } from '@modules/auth/services/app.auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppAuthGuard implements CanActivate {
  constructor(private router: Router,  private authService: AppAuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser: User = this.authService.currentUserValue;
    if (UserUtils.isEmptyOrNull(currentUser)) {
      // not logged in so redirect to login page with the return url
      console.log("redirect to : ", state.url);

      if(state.url === 'auth/register') {
        return true;
      }

      this.router.navigate(['auth/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }

    if(state.url === '/') {
      this.router.navigate(['/dashboard']);
      return true;
    }

    return true;
  }
}
