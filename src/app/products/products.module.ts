import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductReviewsComponent } from './components/product-reviews/product-reviews.component';
import { RouterModule } from '@angular/router';
import { ProductsServicesModule } from './products-services.module';
import { ProductsAPIProvider } from './products.config';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductReviewsComponent],

  imports: [
    CommonModule,
    ProductsServicesModule,
    RouterModule ],

  exports: [
    ProductListComponent
  ],

  providers: [
    ProductsAPIProvider
  ]

})
export class ProductsModule { }
