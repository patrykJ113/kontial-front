import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function idValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      // if (!value) {
      //   return null;
      // }

      const isValidLength = value.length === 5;
      const startsWithLetter = /^[a-zA-Z]/.test(value.charAt(0));
      const hasFourDigits = /^\d{4}$/.test(value.slice(1));

      const errors: ValidationErrors = {};

      if (!isValidLength) {
        errors['length'] = true;
      }
      if (!startsWithLetter) {
        errors['startWithLetter'] = true;
      }
      if (!hasFourDigits) {
        errors['hasFourDigits'] = true;
      }

      return Object.keys(errors).length ? errors : null;
    };
  }
