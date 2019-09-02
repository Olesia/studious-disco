import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './components/cart/cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { RouterModule } from '@angular/router';
import { CartContainerComponent } from './cart-container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartRoutingModule.components
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    CartRoutingModule
  ],
  exports: [
    CartComponent,
    CartContainerComponent
  ]
})
export class CartModule { }
