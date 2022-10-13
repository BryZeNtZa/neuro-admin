import { Component } from '@angular/core';
import { ISidebar } from '@shared/interfaces/ISidebar';
import { SidebarService } from '@shared/services/app.sidebar.service';

@Component({
  template: '<router-outlet></router-outlet>'
})
export class TherapistsIndexComponent {

  private sidebar: ISidebar = {
    title: 'Therapists',
    state: 'open',
    menu: [
      {
        title: 'Therapists',
        url: 'therapists/list',
        label: 'Therapists list',
        state: 'active'
      }
    ]
  }

  constructor(
    private sidebarService: SidebarService,
  ) {
    this.sidebarService.update(this.sidebar);
  }
}
