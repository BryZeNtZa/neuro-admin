import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@entity/User';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AppAuthService } from '@modules/auth/services/app.auth.service';

@Component({
  selector: 'app-nav-user-profile',
  templateUrl: 'app.nav.user-profile.html',
  styleUrls: ['app.nav.user-profile.css'],
})
export class AppUserProfileComponent {
  name = '';
  @Input()
  userConnected!: User;

  icons = {user: faUser}

  // Message emitter to (to the parent or other component)
  @Output() messageToEmit = new EventEmitter<string>();

  messageToSendC: string = 'Hello Parent !';

  constructor(private authService: AppAuthService,
    private router: Router) {}

  public setProfileName(name: string) {
    this.name = name;
  }

  logout(message: string) {
    this.authService.logout();
    location.reload();
    //this.router.navigate(['/']);
    this.messageToEmit.emit(message);
  }

}
