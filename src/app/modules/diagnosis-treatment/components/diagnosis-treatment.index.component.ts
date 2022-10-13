import { Component } from '@angular/core';
import { SidebarService } from '@shared/services/app.sidebar.service';
import { ISidebar } from '@shared/interfaces/ISidebar';

@Component({
  template: '<router-outlet></router-outlet>'
})
export class DiagnosisAndTreatmentIndexComponent {
  private sidebar: ISidebar = {
    title: 'Diagnosis and treatment',
    state: 'open',
    menu: [
      {
        title: 'Diagnosis',
        url: 'diagnosis-and-treatement',
        label: 'Diagnosis',
        state: 'active'
      },
      {
        title: 'Treatments',
        url: 'diagnosis-and-treatement',
        label: 'Treatments',
        state: 'inactive'
      },
      {
        title: 'Disorders',
        url: 'diagnosis-and-treatement',
        label: 'Disorders',
        state: 'inactive'
      },
    ]
  }

  constructor(
    private sidebarService: SidebarService,
  ) {
    this.sidebarService.update(this.sidebar);
  }
}
