import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AppFormService } from '@shared/services/app.form.service';
import { AppSnackBarComponent } from '@shared/widgets/snackbar/app.snackbar.widget';
import { Patient } from '@entity/Patient';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients.list.component.html',
  styleUrls: ['./patients.list.component.css']
})
export class PatientsListComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  patients: Patient[] = [
    {id:1, first_name: 'Jessica', last_name: 'Halloway'},
    {id:2, first_name: 'Amy', last_name: 'Thomson'},
    {id:3, first_name: 'George', last_name: 'Remucal'},
  ];

  displayedColumns: string[] = ['select', 'first_name', 'last_name'];
  dataSource = new MatTableDataSource<Patient>(this.patients);
  selection = new SelectionModel<Patient>(true, []);

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
  checkboxLabel(row?: Patient): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${(row.id ?? 0) + 1}`;
  }
}
