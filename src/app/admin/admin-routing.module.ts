import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent, ManageProductsComponent, ManageProductsFormComponent, ManageOrdersComponent } from './components';
import { AuthGuard } from '../core/guards/auth.guard';
import { ProductResolveGuard } from '../products/guards';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'products',
            component: ManageProductsComponent,
            children: [
              {
                path: 'add',
                resolve: {
                  product: ProductResolveGuard
                },
                component: ManageProductsFormComponent
              },
              {
                path: 'edit/:productID',
                resolve: {
                  product: ProductResolveGuard
                },
                component: ManageProductsFormComponent
              }
            ]
          },
          { path: 'orders', component: ManageOrdersComponent }
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [
    AdminComponent,
    ManageProductsComponent,
    ManageProductsFormComponent,
    ManageOrdersComponent
  ];
}
