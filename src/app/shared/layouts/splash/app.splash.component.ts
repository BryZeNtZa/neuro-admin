import { Component, OnInit } from '@angular/core';
import { User, UserUtils } from '@entity/User';

@Component({
  selector: 'app-splash',
  templateUrl: './app.splash.component.html',
  styleUrls: ['./app.splash.component.css']
})
export class AppSplashComponent {

  ngOnInit() {
    console.log('Loaded the app layout !');
  }

}
