import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppFormService } from '@shared/services/app.form.service';
import { AppSnackBarComponent } from '@shared/widgets/snackbar/app.snackbar.widget';

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment.create.component.html',
  styleUrls: ['./appointment.create.component.css']
})
export class AppointmentCreateComponent implements OnInit {

  constructor(
    public formService: AppFormService,
    public snackbar: AppSnackBarComponent,
  ) {}

  ngOnInit() {

  }

   // country list
   timeSlots: any = [
    {
      full: "Morning",
      short: "0"
    },
    {
      full: "Afternoon",
      short: "1"
    },
    {
      full: "Evening",
      short: "2"
    },
    {
      full: "Night",
      short: "3"
    }
  ];
  selectedTimeSlots: string = "0";
  timeSlotsControl = new FormControl(this.selectedTimeSlots);

  // therapists list
  therapists: any = [
    {
      full: "Rachel Kargas",
      short: "0"
    },
    {
      full: "Martin McClay",
      short: "1"
    },
  ];
  selectedTherapist: string = "0";
  therapistControl = new FormControl(this.selectedTherapist);


  // patients list
  patients: any = [
    {
      full: "Jessica Halloway",
      short: "0"
    },
    {
      full: "Amy Thomson",
      short: "1"
    },
    {
      full: "George Remucal",
      short: "2"
    },
  ];
  selectedPatient: string = "0";
  patientControl = new FormControl(this.selectedPatient);


  onFileSelected() {
    alert("Component nor ready !");
  }

  diffuse() {}
}
