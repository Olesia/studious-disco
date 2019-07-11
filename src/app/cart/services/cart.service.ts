import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartList = new Array<ProductModel>();
  public cartList$: Subject<Array<ProductModel>> = new Subject();

  constructor() { }

  addProduct(product: ProductModel) {
    this.cartList.push(product);
    this.cartList$.next(this.cartList);
  }

  removeProduct(product: ProductModel) {
    this.cartList.splice(this.cartList.indexOf(product), 1);
    this.cartList$.next(this.cartList);
  }
}
