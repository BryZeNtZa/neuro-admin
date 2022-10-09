import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserUtils } from '@entity/User';

@Component({
  template: '<router-outlet></router-outlet>'
})
export class HomeIndexComponent {
  constructor(
    private router: Router,
  ) {
  }
}
