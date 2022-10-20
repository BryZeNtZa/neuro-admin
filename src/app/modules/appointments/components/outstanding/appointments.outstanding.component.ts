import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AppFormService } from '@shared/services/app.form.service';
import { AppFormValidators } from '@shared/services/app.form-validators.service';
import { AppSnackBarComponent } from '@shared/widgets/snackbar/app.snackbar.widget';
import { first } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { User } from '@entity/User';
import { Appointment, AppointmentStatus, Timeslot } from '@entity/Appointment';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Patient, PatientUtils } from '@entity/Patient';
import { Therapist, TherapistUtils } from '@entity/Therapist';

@Component({
  selector: 'app-appointments-outstanding',
  templateUrl: './appointments.outstanding.component.html',
  styleUrls: ['./appointments.outstanding.component.css']
})
export class AppointmentOutstandingComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  appointments: Appointment[] = [];

  displayedColumns: string[] = ['select', 'timeslot', 'status', 'start', 'start', 'end', 'therapist', 'patient'];
  dataSource = new MatTableDataSource<Appointment>();
  selection = new SelectionModel<Appointment>(true, []);
AppointmentStatus: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public form: FormBuilder,
    public formService: AppFormService,
    public snackbar: AppSnackBarComponent,
  ) {}

  ngOnInit(): void {

    // some hard coded therapists
    let therapist1: Therapist = TherapistUtils.getEmpty();
    therapist1.first_name = 'Rachel';
    therapist1.last_name = 'Kargas';

    let therapist2: Therapist = TherapistUtils.getEmpty();
    therapist2.first_name = 'Martin';
    therapist2.last_name = 'McClay';

    // some hard coded patients
    let patient1: Patient = PatientUtils.getEmpty();
    patient1.first_name = 'Jessica';
    patient1.last_name = 'Halloway';

    let patient2: Patient = PatientUtils.getEmpty();
    patient2.first_name = 'Amy';
    patient2.last_name = 'Thomson';

    let patient3: Patient = PatientUtils.getEmpty();
    patient3.first_name = 'George';
    patient3.last_name = 'Remucal';

    this.appointments = [
      {
        _id:'1',
        start: new Date,
        end: new Date,
        timeslot: Timeslot.Morning,
        therapist: therapist2,
        patient: patient1,
        status: AppointmentStatus.Pending,
        next_id: '',
        previous_id: '',
        note_id: '',
        date: new Date
      },
      {
        _id:'2',
        start: new Date,
        end: new Date,
        timeslot: Timeslot.Morning,
        therapist: therapist1,
        patient: patient2,
        status: AppointmentStatus.Closed,
        next_id: '',
        previous_id: '',
        note_id: '',
        date: new Date
      },
      {
        _id:'3',
        start: new Date,
        end: new Date,
        timeslot: Timeslot.Afternoon,
        therapist: therapist1,
        patient: patient3,
        status: AppointmentStatus.Inprogress,
        next_id: '',
        previous_id: '',
        note_id: '',
        date: new Date
      },
    ];

    this.dataSource.data = this.appointments;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Appointment): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${(row._id ?? '')}`;
  }


}
