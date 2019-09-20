import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent,
         ProductListComponent,
         ProductReviewsComponent } from './components';
import { ProductsServicesModule } from './products-services.module';
import { ProductsAPIProvider } from './products.config';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductReviewsComponent],

  imports: [
    CommonModule,
    ProductsServicesModule,
    ProductsRoutingModule
  ],

  exports: [
    ProductListComponent
  ],

  providers: [
    ProductsAPIProvider
  ]

})
export class ProductsModule { }
