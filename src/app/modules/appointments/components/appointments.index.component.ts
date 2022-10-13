import { Component } from '@angular/core';
import { ISidebar } from '@shared/interfaces/ISidebar';
import { SidebarService } from '@shared/services/app.sidebar.service';

@Component({
  template: '<router-outlet></router-outlet>'
})
export class AppointmentsIndexComponent {
  private sidebar: ISidebar = {
    title: 'Appointments',
    state: 'open',
    menu: [
      {
        title: 'Upcomming appointments',
        url: 'appointments',
        label: 'Upcomming appointments',
        state: 'active'
      },
      {
        title: 'Appointments history',
        url: 'appointments',
        label: 'Appointments history',
        state: 'inactive'
      }
    ]
  }

  constructor(
    private sidebarService: SidebarService,
  ) {
    this.sidebarService.update(this.sidebar);
  }
}
