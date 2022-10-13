import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// import { Router, ActivatedRoute } from '@angular/router';
// import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AppFormService } from '@shared/services/app.form.service';
//import { AppFormValidators } from '@shared/services/app.form-validators.service';
import { AppSnackBarComponent } from '@shared/widgets/snackbar/app.snackbar.widget';
/*import { first } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { User } from '@entity/User';*/

@Component({
  selector: 'app-patients-create',
  templateUrl: './patients.create.component.html',
  styleUrls: ['./patients.create.component.css']
})
export class PatientsCreateComponent implements OnInit {

  hidePassword = true;

  constructor(
    //private router: Router,
    //private route: ActivatedRoute,
   // public form: FormBuilder,
    public formService: AppFormService,
    public snackbar: AppSnackBarComponent,
  ) {}

  ngOnInit() {

  }

   // country list
   typesDocument: any = [
    {
      full: "Male",
      short: "0"
    },
    {
      full: "Female",
      short: "1"
    },
    {
      full: "Unknown",
      short: "2"
    }
  ];
  selectedTypeDocument: string = "PDF";

  selectedTypeDocumentControl = new FormControl(this.selectedTypeDocument);

  onFileSelected() {
    alert("Component nor ready !");
  }

  diffuse() {}
}
