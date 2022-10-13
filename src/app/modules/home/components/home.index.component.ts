import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserUtils } from '@entity/User';
import { ISidebar } from '@shared/interfaces/ISidebar';
import { SidebarService } from '@shared/services/app.sidebar.service';

@Component({
  template: '<router-outlet></router-outlet>'
})
export class HomeIndexComponent {

  private sidebar: ISidebar = {
    title: 'Dashboard',
    state: 'open',
    menu: [
      {
        title: 'Dashboard',
        url: 'dashboard',
        label: 'General',
        state: 'active'
      },
      {
        title: 'Dashboard',
        url: 'dashboard',
        label: 'Reports',
        state: 'inactive'
      },
      {
        title: 'Dashboard',
        url: 'dashboard',
        label: 'Reviews',
        state: 'inactive'
      },
      {
        title: 'Dashboard',
        url: 'dashboard',
        label: 'Incomes',
        state: 'inactive'
      },
    ]
  }

  constructor(
    private sidebarService: SidebarService,
  ) {
    this.sidebarService.update(this.sidebar);
  }
}
