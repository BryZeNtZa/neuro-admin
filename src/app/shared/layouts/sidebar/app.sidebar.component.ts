import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserUtils } from '@entity/User';
import { AppAuthService } from '@modules/auth/services/app.auth.service';
import { ISidebar } from '@shared/interfaces/ISidebar';
import { SidebarService } from '@shared/services/app.sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app.sidebar.component.html',
  styleUrls: ['./app.sidebar.component.css']
})
export class AppSidebarComponent implements OnInit {

  sidebar!: ISidebar;

  constructor(
    private sidebarService: SidebarService,
    private router: Router) {}

  ngOnInit() {
    this.sidebarService.sidebar.subscribe(sidebar => this.sidebar = sidebar);
  }

  menuItemClicked(index: number) {
    this.sidebar.menu.forEach((item, i) => {
      if (i !== index) {
        //this.sidebar.menu[i].state = 'inactive';
        item.state = 'inactive';
      }
    });
    this.sidebar.menu[index].state = 'active';
    this.router.navigate([this.sidebar.menu[index].url]);
  }

}
