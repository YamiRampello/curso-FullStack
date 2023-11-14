import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const validacionEmail: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  let email = control.get('email');
  let confirmaEmail = control.get('emailConfirm');

  return email && confirmaEmail && email.value === confirmaEmail.value
    ? { coincide: true }
    : null;
};
