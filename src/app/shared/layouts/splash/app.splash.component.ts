import { Component, OnInit } from '@angular/core';
import { User, UserUtils } from '@entity/User';

@Component({
  selector: 'app-splash',
  templateUrl: './app.splash.component.html',
  styleUrls: ['./app.splash.component.css']
})
export class AppSplashComponent implements OnInit {

  private userConnected: User = UserUtils.getEmpty();

  private receivedChildMessage: string = '';
  messageToSendP = 'Bonjour !!!';

  constructor() {}

  sendToChild(message: string) {
    this.messageToSendP = message;
  }

  getMessage(message: string) {
    this.receivedChildMessage = message;
  }

  ngOnInit() {
    console.log('Loaded the app layout !');
  }

}
