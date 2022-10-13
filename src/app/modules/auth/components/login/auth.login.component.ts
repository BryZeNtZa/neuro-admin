import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { AppFormValidators } from '@shared/services/app.form-validators.service';
import { first } from 'rxjs';
import { User } from '@entity/User';
import { AppCoreComponent } from '@app/app.core.component';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth.login.component.html',
  styleUrls: ['./auth.login.component.css']
})
export class AuthLoginComponent extends AppCoreComponent implements OnInit {

  hidePassword = true;
  loginInProgress = false;
  returnUrl: string | undefined;

  public loginForm!: FormGroup;
  public formErrors = {
    username: '',
    password: '',
  };

  constructor() {
    super()
  }

  public login() {
    // mark all fields as touched
    this.formService.markFormGroupTouched(this.loginForm);

    // right before we submit our form to the server we check if the form is valid
    // if not, we pass the form to the validateform function again. Now with check dirty false
    // this means we check every form field independent of wether it's touched
    if (this.loginForm.valid) {

      this.snackbar.info('Login...');
      const f = this.loginForm.controls;

      const response = this.authService.login(f['username'].value, f['password'].value);
      const result = response.pipe(first());

      result.subscribe({
        next: (data: User) => {
          this.createSession(data);
          this.router.navigate(['/dashboard']).then(() => location.reload());
        },
        error: (e: Error) => {
          this.snackbar.error(`Login failed: ${e.message}`);
        }
      });
    } else {
      this.snackbar.warning('Kindly provide your credentials, thank you !');
      this.formErrors = this.formService.validateForm(this.loginForm, this.formErrors, false);
    }
  }

  // build our login form
  public buildLoginForm() {
    this.loginForm = this.form.group({
      username: ['', [Validators.required, AppFormValidators.validateCharacters]],
      password: ['', [Validators.required]],
    });

    // on each value change we call the validateForm function
    // We only validate form controls that are dirty, meaning they are touched
    // the result is passed to the formErrors object
    this.loginForm.valueChanges.subscribe((data) => {
      this.formErrors = this.formService.validateForm(this.loginForm, this.formErrors, true);
    });
  }

  // return all the login form inputs reference
  get f() { return this.loginForm.controls; }

  // initialize component
  ngOnInit() {
    this.buildLoginForm();

  }

  // URL where the user will be redirected after login
  setRedirectURL() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

}
