import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { OrderModel } from '../../models/order.model';
import { CustomValidators } from 'src/app/validators/custom.validators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})

export class ProcessOrderComponent implements OnInit, OnDestroy {
  orderModel: OrderModel;
  orderForm: FormGroup;
  validationMessageFirstName: string;
  validationMessageEmail: string;

  private sub: Subscription;
  private validationMessagesMap = {
    firstName: {
      required: 'Please enter your first name',
      firstName: 'First name is too long'
    },
    email: {
      required: 'Please enter your email',
      email: 'Email is incorrect'
    }
  };

  constructor(private fb: FormBuilder) { }

  onBlurFirstName() {
    const fnControl = this.orderForm.get('firstName');
    this.setValidationMessage(fnControl, 'firstName');
  }

  onBlurEmail() {
    const fnControl = this.orderForm.get('email');
    this.setValidationMessage(fnControl, 'email');
  }

  ngOnInit() {
    this.buildForm();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSave() {
    console.log(this.orderForm);
    console.log(`Saved: ${JSON.stringify(this.orderForm.value)}`);
  }

  onAddPhone(): void {
    this.phones.push(this.buildPhones());
  }

  onPhoneRemoved(i: number): void {
    this.phones.removeAt(i);
  }

  get phones(): FormArray {
    return this.orderForm.get('phones') as FormArray;
  }

  private buildPhones(): FormGroup {
    return this.fb.group({
      number: ''
    });
  }

  private buildForm() {
    this.orderForm = this.fb.group({
      firstName: ['', {
        validators: [Validators.required, CustomValidators.firstName],
        updateOn: 'blur'
      }],
      lastName: '',
      email: [''],
      selfRemoval: true,
      address: '',
      phones: this.fb.array([this.buildPhones()])
    });
  }
// TODO: to be rewrited to work async - not on blur
  private setValidationMessage(c: AbstractControl, controlName: string) {
    if ((c.touched || c.dirty) && c.errors) {
      if (controlName === 'firstName') {
        this.validationMessageFirstName = '';
        this.validationMessageFirstName = Object.keys(c.errors)
          .map(key => this.validationMessagesMap[controlName][key])
          .join(' ');
      }
      if (controlName === 'email') {
        {
          this.validationMessageEmail = '';
          this.validationMessageEmail = Object.keys(c.errors)
            .map(key => this.validationMessagesMap[controlName][key])
            .join(' ');
        }
      }
    }
  }
}
