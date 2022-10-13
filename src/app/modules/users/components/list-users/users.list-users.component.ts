import {
  Component,
  OnInit,
} from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AppCoreComponent } from '@app/app.core.component';
import { AddUserComponent } from '../add-user/users.add-user.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users.list-users.component.html',
  styleUrls: ['./users.list-users.component.css']
})
export class ListUsersComponent extends AppCoreComponent implements OnInit {

  displayedColumns = ['position', 'name', 'fiscalPeriod', 'creationDate'];
  dataSource =  [
    {position: 1, name: 'Rapport DSF 001', fiscalPeriod: '01-01-2019 - 31-12-2019', creationDate: '22 Nov. 2019'},
    {position: 2, name: 'Rapport DSF 002', fiscalPeriod: '01-01-2019 - 31-12-2019', creationDate: '22 Nov. 2019'},
    {position: 3, name: 'Rapport DSF 003', fiscalPeriod: '01-01-2019 - 31-12-2019', creationDate: '22 Nov. 2019'},
    {position: 4, name: 'Rapport DSF 004', fiscalPeriod: '01-01-2019 - 31-12-2019', creationDate: '22 Nov. 2019'},
    {position: 5, name: 'Rapport DSF 005', fiscalPeriod: '01-01-2019 - 31-12-2019', creationDate: '22 Nov. 2019'},
    {position: 6, name: 'Rapport DSF 006', fiscalPeriod: '01-01-2019 - 31-12-2019', creationDate: '22 Nov. 2019'},
    {position: 7, name: 'Rapport DSF 007', fiscalPeriod: '01-01-2019 - 31-12-2019', creationDate: '22 Nov. 2019'},
  ];

  // @ViewChild('dsfEditor', {read: '', static: false})
  dsfEditor!: AddUserComponent;

  periodMode = 'year';
  data: any;
  constructor(private modalService: NgbModal) {
    super();
  }

  ngOnInit() {
    console.log('Hello im the users list component');
  }

  openPrimary(content: any) {
    this.modalService.open(content, {size: 'lg', ariaLabelledBy: 'modal-primary-title'});
  }

  openDsfEditor() {
    const modalRef = this.modalService.open(AddUserComponent, {size: 'xl', ariaLabelledBy: 'modal-primary-title'});
    // modalRef.componentInstance.datas = this.data;
  }

  choosePeriodMode(mode: string) {
    this.periodMode = mode;
  }
}
