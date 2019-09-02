import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductReviewsComponent } from './components/product-reviews/product-reviews.component';

const routes: Routes = [
  {
    path: 'products-list',
    component: ProductListComponent,
    children: [
      {
        path: 'reviews/:productID',
        component: ProductReviewsComponent,
        outlet: 'reviews'
      }
    ]
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
