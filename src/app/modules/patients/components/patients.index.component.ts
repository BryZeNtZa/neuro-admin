import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ISidebar } from '@shared/interfaces/ISidebar';
import { AppSidebarComponent } from '@shared/layouts/sidebar/app.sidebar.component';
import { SidebarService } from '@shared/services/app.sidebar.service';

@Component({
  template: '<router-outlet></router-outlet>'
})
export class PatientsIndexComponent {

  private sidebar: ISidebar = {
    title: 'Patients',
    state: 'open',
    menu: [
      {
        title: 'Patient lists',
        url: 'patients/list',
        label: 'Patient lists',
        state: 'active'
      },
      {
        title: 'Add a new patient',
        url: 'patients/create',
        label: 'New patient',
        state: 'inactive'
      }
    ]
  }

  constructor(
    private router: Router,
    private sidebarService: SidebarService,
  ) {
    this.sidebarService.update(this.sidebar);
  }
}
