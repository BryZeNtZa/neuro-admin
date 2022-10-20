import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AppFormService } from '@shared/services/app.form.service';
import { AppSnackBarComponent } from '@shared/widgets/snackbar/app.snackbar.widget';

@Component({
  selector: 'app-therapist-create',
  templateUrl: './therapist.create.component.html',
  styleUrls: ['./therapist.create.component.css']
})
export class TherapistCreateComponent implements OnInit {

  hidePassword = true;

  constructor(
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
