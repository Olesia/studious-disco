import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './components/order/order.component';
import { RouterModule } from '@angular/router';
import { ProcessOrderComponent } from './components/process-order-component/process-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OrderComponent, ProcessOrderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    OrderComponent
  ]
})
export class OrderModule { }
