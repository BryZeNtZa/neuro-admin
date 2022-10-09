import {
  Component,
  OnInit,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';

import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AppCoreComponent } from '@app/app.core.component';

@Component({
  selector: 'app-users-index',
  templateUrl: './users.index.component.html',
  styleUrls: ['./users.index.component.css'],
})
export class UsersIndexComponent extends AppCoreComponent implements OnInit {

  displayWelcomeMessage = false;

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
    private router: Router,
    private el: ElementRef,
    private ref: ChangeDetectorRef
  ) {
    super()
  }

  testfunction(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // not logged in so redirect to login page with the return url
    this.router.navigate(['auth/'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  menuItemClicked(index: number) {

    this.menu.forEach((item, i) => {
      if (i !== index) {
        this.menu[i].state = '';
      }
    });
    this.menu[index].state = 'active';
    this.displayWelcomeMessage = false;
    this.router.navigate([this.menu[index].link]);
  }

  ngOnInit() {
      if (this.router.url === '/dsf') {
        this.displayWelcomeMessage = true;
        this.menu.map(item => { item.state = ''; });
      } else {
        this.displayWelcomeMessage = false;
        this.menu.forEach(item => {
          item.state =  (`/${item.link}` === this.router.url) ? 'active' : '';
        });
      }
  }

}
