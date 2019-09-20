import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductModel, IProduct } from 'src/app/products/models/product.model';
import { Router } from '@angular/router';

// @NgRx
import { Store, select } from '@ngrx/store';
import { AppState, selectSelectedProductByUrl } from './../../../core/@ngrx';
import * as ProductsActions from './../../../core/@ngrx/products';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-products-form',
  templateUrl: './manage-products-form.component.html',
  styleUrls: ['./manage-products-form.component.css']
})

export class ManageProductsFormComponent implements OnInit, OnDestroy {
  product: ProductModel;
  originalProduct: ProductModel;
  private sub: Subscription;

  constructor(
    private store: Store<AppState>,
    private router: Router) { }

  ngOnInit() {
    this.product = new ProductModel(0, '', '', 0, true, null);
    this.sub = this.store
      .pipe(select(selectSelectedProductByUrl))
      .subscribe(product => this.product = {...product});

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSaveProduct() {
    const product = { ...this.product } as IProduct;
    if (product.id) {
      this.store.dispatch(ProductsActions.updateProduct({ product }));
    } else {
      this.store.dispatch(ProductsActions.createProduct({ product }));
    }
    // this.onGoBack();
  }

  onGoBack() {
    this.router.navigate(['admin', 'products']);
  }
}
