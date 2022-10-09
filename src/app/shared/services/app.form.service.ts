import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppFormService {

  public errorMessagesConfig = {
    required: `Field is required.`,
    invalidPassword: 'Invalid password. Password must be at least 6 characters long, and contain a number.',
    maxlength: `The field can't contain more than {max} characters.`,
    minlength: `The field must contain atleast {min} characters.`,
  };

  // constructor() {}

  // get all values of the formGroup, loop over them
  // then mark each field as touched
  public markFormGroupTouched(formGroup: FormGroup) {

    Object.values(formGroup.controls).forEach(control => {
        control.markAsTouched();
        /*if (control.controls) {
          control.controls.forEach(c => this.markFormGroupTouched(c));
        }*/
    });

  }

  // return list of error messages
  public getValidationMessages() {
    return this.errorMessagesConfig;
  }

  public invalidCharacters (matches: any[]){
    let matchedCharacters = matches;
    matchedCharacters = matchedCharacters.reduce(
        (characterString, character, index) => {
            let str = characterString;
            str += character;
            if (matchedCharacters.length !== index + 1) {
                str += ', ';
            }
            return str;
        },
    '');

    return `These characters are not allowed: ${matchedCharacters}`;
  }

  public getValidationErrorMessage(validatorName: string, validatorValue?: any, labelName?: string): any {
    type ObjectKey = keyof typeof this.errorMessagesConfig;
    const key = validatorName as ObjectKey;
    return this.errorMessagesConfig[key];
  }

  // Validate form instance
  // check_dirty true will only emit errors if the field is touched
  // check_dirty false will check all fields independent of
  // being touched or not. Use this as the last check before submitting
  public validateForm(formToValidate: FormGroup, formErrors: any, checkDirty?: boolean) {

    const form = formToValidate;

    type ObjectKey = keyof typeof this.errorMessagesConfig;

    for (const field in formErrors) {
        if (field) {

            formErrors[field] = '';
            const control = form.get(field);

            const messages = this.errorMessagesConfig;

            if (control && !control.valid) {

                if (!checkDirty || (control.dirty || control.touched)) {

                    for (const key in control.errors) {
                        if (key) {
                          const k = key as ObjectKey;
                            formErrors[field] = formErrors[field] || messages[k];
                        } else {
                            formErrors[field] = formErrors[field] || this.invalidCharacters(control.errors[key]);
                        }
                    }
                }
            }
        }
    }

    return formErrors;
  }

}
