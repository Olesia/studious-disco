import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { checkEmail } from './custom.validators';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true
  }]
})

export class EmailValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
  return checkEmail(control);
  }
}
