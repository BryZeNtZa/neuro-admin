import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserUtils } from '@entity/User';
import { AppAuthService } from '@modules/auth/services/app.auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app.sidebar.component.html',
  styleUrls: ['./app.sidebar.component.css']
})
export class AppSidebarComponent /*implements OnInit */ {

  moduleName: string = 'Dashboard';

  menu = [
    {
      label: 'mod.menu.generate',
      title: 'mod.menu.generate.description',
      link: 'dsf/build',
      state: 'active',
    },
    {
      label: 'mod.menu.parameter',
      title: 'mod.menu.parameter.description',
      link: 'dsf/param',
      state: '',
    },
  ];

  constructor(
    private authService: AppAuthService,
    private router: Router) {}

  /*ngOnInit() {
    if(!UserUtils.isEmptyOrNull(this.authService.currentUserValue)) {
      console.log('Redirect to dashboard !!!');
      this.router.navigate(['/dashoard']);
    }
  }*/

  menuItemClicked(index: number) {
    this.menu.forEach((item, i) => {
      if (i !== index) {
        this.menu[i].state = '';
      }
    });
    this.menu[index].state = 'active';
    this.router.navigate([this.menu[index].link]);
  }

}
