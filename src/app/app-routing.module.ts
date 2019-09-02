import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent, LoginComponent, PathNotFoundComponent } from './layout/components';
import { OrderComponent } from './order/order/order.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'cart',
    outlet: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),
    data: {
      preload: true,
      title: 'Cart'
    }
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    data: { title: 'Admin' }
  },
  {
    path: '',
    redirectTo: '/products-list(cart:cart)',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
