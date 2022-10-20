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
        title: 'Outstanding appointments',
        url: 'appointments',
        label: 'Outstanding appointments',
        state: 'active'
      },
      {
        title: 'Appointments history',
        url: 'appointments/history',
        label: 'Appointments history',
        state: 'inactive'
      },
      {
        title: 'Create ppointment',
        url: 'appointments/create',
        label: 'Create appointment',
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
