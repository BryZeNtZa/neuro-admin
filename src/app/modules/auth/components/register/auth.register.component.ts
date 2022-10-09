import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AppFormService } from '@shared/services/app.form.service';
import { AppFormValidators } from '@shared/services/app.form-validators.service';
import { AppSnackBarComponent } from '@shared/widgets/snackbar/app.snackbar.widget';
import { AppAuthService } from '../../services/app.auth.service';
import { first } from 'rxjs/operators';
import { RegisterDto, User, UserUtils } from '@entity/User';
import { DtoInterface } from '@dto/DtoInterface';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth.register.component.html',
  styleUrls: ['./auth.register.component.css']
})
export class AuthRegisterComponent implements OnInit {

  hidePassword = true;
  registerInProgress = false;
  returnUrl: string | undefined;

  public registerForm!: FormGroup;
  public formFields = UserUtils.getEmptyRegisterDto();


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public form: FormBuilder,
    public formService: AppFormService,
    public snackbar: AppSnackBarComponent,
    public authService: AppAuthService
  ) {
  }

  public register() {

    if(this.registerInProgress === true) return;
    this.registerInProgress = true;

    // mark all fields as touched
    this.formService.markFormGroupTouched(this.registerForm);

    // right before we submit our form to the server we check if the form is valid
    // if not, we pass the form to the validateform function again. Now with check dirty false
    // this means we check every form field independent of wether it's touched
    if (this.registerForm.valid) {

      const f = this.registerForm.controls;

      if(f['password'].value !== f['password_confirm'].value) {
        this.snackbar.info('Password and confirmation and confirmation are not the same ! Kindly retype.');
        this.registerInProgress = false;
        return;
      }

      this.snackbar.info('Registration...');

      let data: DtoInterface<RegisterDto> = <DtoInterface<RegisterDto>> <unknown>this.formFields;

      Object.keys(data).forEach(key => {
        console.log('Key = ', key);
        if(f[key]) data[key] = f[key].value;
      });

      const response = this.authService.register(data);
      const result = response.pipe(first());

      result.subscribe({
        next: (data: User) => {
          console.log('User created : ', data);
          this.snackbar.info('You registered successfully, please login with your credentials');
          setTimeout(() => { this.router.navigate(['/auth/login']); }, 4000);
        },
        error: (e: Error) => {
          this.snackbar.error(`Registration failed: ${e.message}`);
          this.registerInProgress = false;
        }
      });
    } else {
      this.registerInProgress = false;
      this.snackbar.warning('Kindly provide correct information, thank you !');
      this.formFields = this.formService.validateForm(this.registerForm, this.formFields, false);
    }
  }

  // build our login form
  public buildRegisterForm() {
    this.registerForm = this.form.group({
      first_name: ['', [Validators.required, AppFormValidators.validateCharacters]],
      last_name: ['', [Validators.required, AppFormValidators.validateCharacters]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      password_confirm: ['', [Validators.required]],
    });

    // on each value change we call the validateForm function
    // We only validate form controls that are dirty, meaning they are touched
    // the result is passed to the formErrors object
    this.registerForm.valueChanges.subscribe((data) => {
      this.formFields = this.formService.validateForm(this.registerForm, this.formFields, true);
    });
  }

  // return all the login form inputs reference
  // get f() { return this.registerForm.controls; }

  // initialize component
  ngOnInit() {
    this.buildRegisterForm();
  }

  // URL where the user will be redirected after login
  setRedirectURL() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

}
