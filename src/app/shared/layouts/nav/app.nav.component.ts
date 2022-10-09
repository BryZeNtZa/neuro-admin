import { Component, OnInit } from '@angular/core';
import { UserUtils } from '@entity/User';

@Component({
  selector: 'app-nav-layout',
  templateUrl: './app.nav.component.html',
  styleUrls: ['./app.nav.component.css']
})
export class AppNavComponent implements OnInit {

  appname = 'Neuro App';

  userConnected = UserUtils.getEmpty();

  constructor() {}

  ngOnInit() {}

  getMessage(msg: string) {
    console.log('App nav component message :', msg);
  }

}
