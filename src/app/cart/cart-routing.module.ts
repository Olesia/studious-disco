import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartContainerComponent, CartListComponent, CartFormComponent, CartItemComponent } from './components';

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
      component: CartListComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {
  static components = [CartContainerComponent, CartListComponent, CartFormComponent, CartItemComponent];
 }
