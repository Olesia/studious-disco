import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  static firstName(control: AbstractControl): { [key: string]: any } | null {
    return control.value.trim().length > 10 ? { firstName: {value: control.value}} : null;
  }
}

export function checkEmail(control: AbstractControl): { [key: string]: any } | null {
    const regex = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+');
    const isCorrect = regex.test(control.value);
    return !isCorrect ? { email: {value: control.value}} : null;
  }
