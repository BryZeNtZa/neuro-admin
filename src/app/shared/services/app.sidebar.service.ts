import { Injectable } from '@angular/core';
import { ISidebar } from '@shared/interfaces/ISidebar';
import { BehaviorSubject } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class SidebarService {

  private sidebarSubject = new BehaviorSubject<ISidebar>({
    title: '',
    state: 'open',
    menu: []
  });

  sidebar = this.sidebarSubject.asObservable();

  constructor() {

  }

  update(sb: ISidebar) {
    this.sidebarSubject.next(sb);
  }

}
