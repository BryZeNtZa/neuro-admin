import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.widget.html',
  styleUrls: ['./spinner.widget.scss']
})
export class SpinnerComponent {
  @Input() public isLoading = false;
  @Input() public message: string = "";
}
