import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { RouterModule } from '@angular/router';
import { CartContainerComponent, CartListComponent } from './components';
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
    CartListComponent,
    CartContainerComponent
  ]
})
export class CartModule { }
