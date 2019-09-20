import { Component, OnInit } from '@angular/core';
import { ProductModel, IProduct } from '../../models/product.model';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState, selectProductsData, selectProductsError  } from 'src/app/core/@ngrx';
import { Observable } from 'rxjs';
import * as ProductsActions from './../../../core/@ngrx/products/products.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products$: Observable<ReadonlyArray<IProduct>>;
  productsError$: Observable<Error | string>;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.products$ = this.store.pipe(select(selectProductsData));
    this.productsError$ = this.store.pipe(select(selectProductsError));

    this.store.dispatch(ProductsActions.getProducts());
  }

  onProductAdded(product: ProductModel): void {
    const link = ['cart', 'add', product.id, false];
    this.router.navigate([{ outlets: { cart: link }}]);
  }

  onShowReviews(id: number) {
    const link = ['reviews', id];
    this.router.navigate(['', { outlets: { reviews: link } }]);
  }
}
