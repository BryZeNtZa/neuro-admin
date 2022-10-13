import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AppFormService } from '@shared/services/app.form.service';
import { AppFormValidators } from '@shared/services/app.form-validators.service';
import { AppSnackBarComponent } from '@shared/widgets/snackbar/app.snackbar.widget';
import { first } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { User } from '@entity/User';

@Component({
  selector: 'app-disorders-list',
  templateUrl: './disorders.list.component.html',
  styleUrls: ['./disorders.list.component.css']
})
export class DisordersListComponent implements OnInit {


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
    private route: ActivatedRoute,
    public form: FormBuilder,
    public formService: AppFormService,
    public snackbar: AppSnackBarComponent,
  ) {
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
