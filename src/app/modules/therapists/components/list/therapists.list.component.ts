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
import { Therapist } from '@entity/Therapist';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-therapists-list',
  templateUrl: './therapists.list.component.html',
  styleUrls: ['./therapists.list.component.css']
})
export class TherapistListComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  therapists: Therapist[] = [
    {id:1, first_name: 'Jessica', last_name: 'Halloway'},
    {id:2, first_name: 'Amy', last_name: 'Thomson'},
    {id:3, first_name: 'George', last_name: 'Remucal'},
  ];

  displayedColumns: string[] = ['select', 'first_name', 'last_name'];
  dataSource = new MatTableDataSource<Therapist>(this.therapists);
  selection = new SelectionModel<Therapist>(true, []);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public form: FormBuilder,
    public formService: AppFormService,
    public snackbar: AppSnackBarComponent,
  ) {}

  ngOnInit(): void {

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
  checkboxLabel(row?: Therapist): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${(row.id ?? 0) + 1}`;
  }

}
