import { Component } from '@angular/core';
import * as RouterActions from './../../../core/@ngrx/router/router.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/@ngrx';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent {
  constructor(
    private store: Store<AppState>) { }

  AddNewProduct() {
    this.store.dispatch(RouterActions.go({
      path: ['admin/products/add']
    }));
  }

  onEditProduct(id: number) {
    const link = ['edit', id];
    this.store.dispatch(RouterActions.go({
      path: link
    }));
  }
}
