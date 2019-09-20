import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsState, AppState } from 'src/app/core/@ngrx';
import { Store, select } from '@ngrx/store';
import * as ProductsActions from './../../../core/@ngrx/products/products.actions';

@Component({
  selector: 'app-manage-products-list',
  templateUrl: './manage-products-list.component.html',
  styleUrls: ['./manage-products-list.component.css']
})
export class ManageProductsListComponent implements OnInit {
  productsState$: Observable<ProductsState>;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.productsState$ = this.store.pipe(select('products'));
    this.store.dispatch(ProductsActions.getProducts());
  }

  onEditProduct(id: number) {
    this.router.navigate(['admin', 'products', 'edit', id]);
  }
}
