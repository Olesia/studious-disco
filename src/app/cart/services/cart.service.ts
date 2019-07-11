import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/models/product-model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartList = new Array<Product>();
  public cartList$: Subject<Array<Product>> = new Subject();
 
  constructor() { }

  addProduct(product: Product){
    this.cartList.push(product);
    this.cartList$.next(this.cartList);
  }

  removeProduct(product: Product)
  {
    this.cartList.splice(this.cartList.indexOf(product),1);
    this.cartList$.next(this.cartList);
  }
}
