import {AbstractControl, ValidationErrors} from '@angular/forms';

export class CustomValidator {

  public static phone(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    return control.value.match(/^[0-9]{9}$/g) ? null : {phone: true};
  }

  public static postalCode(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    return control.value.match(/^[0-9]{2}-[0-9]{3}$/g) ? null : {postalCode: true};
  }
}
