import {Component} from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarVerticalPosition,
  MatSnackBarHorizontalPosition,
} from '@angular/material/snack-bar';


declare type snackBarType = 'error' | 'success' | 'warning' | 'info';

@Component({
  selector: 'app-snack-bar',
  templateUrl: 'app.snackbar.widget.html',
  styleUrls: ['app.snackbar.widget.css'],
})
export class AppSnackBarComponent {

  // general duration of all snackbars (in seconds)
  snbDuration = 5;

  // vertical positionning of all the snackbars
  snbVPosition: MatSnackBarVerticalPosition = 'top';

  // horizontal positionning of all the snackbars
  snbHPosition: MatSnackBarHorizontalPosition = 'center';

  constructor(private snackBar: MatSnackBar) {}

  error(message: string) {
    this.snackBar.open(message, 'X', this.getSnackbarConfig('error'));
  }

  success(message: string) {
    this.snackBar.open(message, 'X', this.getSnackbarConfig('success'));
  }

  warning(message: string) {
    this.snackBar.open(message, 'X', this.getSnackbarConfig('warning'));
  }

  info(message: string) {
    this.snackBar.open(message, 'X', this.getSnackbarConfig('info'));
  }

  public getSnackbarConfig(type: snackBarType): MatSnackBarConfig {

    const snackbarConfig: MatSnackBarConfig = {
      duration: (this.snbDuration * 1000),
      verticalPosition: this.snbVPosition,
      horizontalPosition: this.snbHPosition,
      panelClass: `.app-widget-snackbar-${type}`
    };

    return snackbarConfig;
  }

}

