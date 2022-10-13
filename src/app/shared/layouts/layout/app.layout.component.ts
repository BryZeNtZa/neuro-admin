import { Component, OnInit } from '@angular/core';
import { AppCoreComponent } from '@app/app.core.component';
import { AppStatus } from '@shared/interfaces/IAppStatus';

@Component({
  selector: 'app-layout',
  templateUrl: './app.layout.component.html',
  styleUrls: ['./app.layout.component.css']
})
export class AppLayoutComponent extends AppCoreComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.refreshSession();
  }

}
