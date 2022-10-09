import {
  Component,
  ViewChild,
  OnInit,
  ElementRef,
  ChangeDetectorRef,
  Input
  } from '@angular/core';

  import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppCoreComponent } from '@app/app.core.component';

@Component({
  selector: 'app-users-add',
  templateUrl: './users.add-user.component.html',
  styleUrls: ['./users.add-user.component.css']
})
export class AddUserComponent extends AppCoreComponent implements OnInit {

  @Input() data: any;

  constructor(
    private router: Router,
    private el: ElementRef,
    private ref: ChangeDetectorRef){
    super();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}


