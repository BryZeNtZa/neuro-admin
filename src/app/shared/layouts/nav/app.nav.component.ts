import { Component, OnInit } from '@angular/core';
import { AppCoreComponent } from '@app/app.core.component';
import { UserUtils } from '@entity/User';

@Component({
  selector: 'app-nav-layout',
  templateUrl: './app.nav.component.html',
  styleUrls: ['./app.nav.component.css']
})
export class AppNavComponent extends AppCoreComponent implements OnInit {

  appname = 'Neuro App';

  userConnected = UserUtils.getEmpty();

  constructor() {
    super();
  }

  ngOnInit() {
    this.refreshSession();
  }

  getMessage(msg: string) {
    console.log('App nav component message :', msg);
  }

}
