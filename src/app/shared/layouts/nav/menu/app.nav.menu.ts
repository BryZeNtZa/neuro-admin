import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppCoreComponent } from '@app/app.core.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: 'app.nav.menu.html',
  styleUrls: ['app.nav.menu.css'],
})
export class AppMenuComponent extends AppCoreComponent {

  userLogged = false;

  menu = [
    {
      module: 'dsf',
      label: 'Dashboard',
      link: '/dsf',
      state: 'active',
    },
    {
      module: 'dsf',
      label: 'Appointments',
      link: '/dsf',
      state: 'inactive',
    },
    {
      module: 'dsf',
      label: 'Therapist',
      link: '/dsf',
      state: 'inactive',
    },
    {
      module: 'dsf',
      label: 'Personnel',
      link: '/dsf',
      state: 'inactive',
    },
  ];

  constructor(
    private router: Router
  ) {
    super()
  }

  navMenuItemClicked(index: number) {

    this.menu.forEach((item, i) => {
      if (i !== index) {
        this.menu[i].state = '';
      }
    });

    this.menu[index].state = 'active';

   this.router.navigate([this.menu[index].link], {state: {module: this.menu[index]}});
  }
}
