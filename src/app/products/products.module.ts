import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductReviewsComponent } from './components/product-reviews/product-reviews.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductReviewsComponent],
  imports: [CommonModule, RouterModule],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule {}
