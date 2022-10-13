import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { AppCoreComponent } from '@app/app.core.component';
@Component({
  selector: 'app-users-add',
  templateUrl: './users.add-user.component.html',
  styleUrls: ['./users.add-user.component.css']
})
export class AddUserComponent extends AppCoreComponent implements OnInit {

  @Input() data: any;

  constructor(){
    super();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
