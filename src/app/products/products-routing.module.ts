import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent, ProductReviewsComponent } from './components';

const routes: Routes = [
  {
    path: 'products-list',
    component: ProductListComponent,
  },

  {
    path: 'reviews/:productID',
    component: ProductReviewsComponent,
    outlet: 'reviews'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
