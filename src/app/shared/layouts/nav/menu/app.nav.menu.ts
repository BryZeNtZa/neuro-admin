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
      label: 'Dashboard',
      url: '/dashboard',
      state: 'active',
    },
    {
      label: 'Patients',
      url: '/patients',
      state: 'inactive',
    },
    {
      label: 'Appointments',
      url: '/appointments',
      state: 'inactive',
    },
    {
      label: 'Therapists',
      url: '/therapists',
      state: 'inactive',
    },
    {
      label: 'Diagnosis & Treatment',
      url: '/diagnosis-and-treatement',
      state: 'inactive',
    },
    {
      label: 'Configurations',
      url: '/configurations',
      state: 'inactive',
    },
  ];

  constructor() {
    super()
  }

  navMenuItemClicked(index: number) {

    this.menu.forEach((item, i) => {
      if (i !== index) {
        this.menu[i].state = '';
      }
    });

    this.menu[index].state = 'active';

   this.router.navigate([this.menu[index].url], {state: {module: this.menu[index]}});
  }
}
