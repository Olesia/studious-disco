import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ProductsModule } from './products/products.module';
import { LayoutModule } from './layout/layout.module';
import { AboutComponent } from './layout';
import { ProductsRoutingModule } from './products/products-routing.module';
import { OrderModule } from './order/order.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],

  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    ProductsModule,
    LayoutModule,
    OrderModule,
    ProductsRoutingModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    const replacer = (key: string, value: any): string =>
      typeof value === 'function' ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
