import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartContainerComponent } from './cart-container.component';
import { CartFormComponent } from './components/cart-form/cart-form.component';

const routes: Routes = [
  {
    path: '',
    component: CartContainerComponent,
    children: [
    {
      path: 'add/:cartItemId/:isDeleted',
      component: CartFormComponent
    },
    {
      path: 'remove/:cartItemId/:isDeleted',
      component: CartFormComponent
    },
    {
      path: '',
      component: CartComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {
  static components = [CartComponent, CartFormComponent, CartItemComponent, CartContainerComponent];
 }
