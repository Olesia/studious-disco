import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductModel } from 'src/app/products/models/product.model';
import { CartItemModel } from '../models/cart-item-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalPrice = 0;
  totalCount = 0;

  private cartList = new Array<CartItemModel>();
  cartList$: Subject<Array<CartItemModel>> = new Subject();

  constructor() { }

  addProduct(cartItem: CartItemModel) {
    this.totalCount++;
    this.totalPrice += cartItem.product.price;

    const index = this.CheckExistingIndex(cartItem.product);
    index === -1 ? this.cartList.push(new CartItemModel(cartItem.product, 1)) : this.cartList[index].count ++;
    this.cartList$.next(this.cartList);
  }

  removeProduct(cartItem: CartItemModel) {
    this.totalCount = this.totalCount - cartItem.count;
    this.totalPrice = this.totalPrice - cartItem.count * cartItem.product.price;

    const index = this.CheckExistingIndex(cartItem.product);
    this.cartList.splice(index, 1);
    this.cartList$.next(this.cartList);
  }

  plusOneCartItem(cartItem: CartItemModel) {
    this.totalCount++;
    this.totalPrice += cartItem.product.price;

    const index = this.CheckExistingIndex(cartItem.product);
    this.cartList[index].count++;
    this.cartList$.next(this.cartList);
  }

  minusOneCartItem(cartItem: CartItemModel) {
    this.totalCount --;
    this.totalPrice = this.totalPrice - cartItem.product.price;

    const index = this.CheckExistingIndex(cartItem.product);
    cartItem.count === 1 ? this.cartList.splice(index, 1) : cartItem.count --;
    this.cartList$.next(this.cartList);
  }

  clearCart() {
    this.totalCount = 0;
    this.totalPrice = 0;

    this.cartList = [];
    this.cartList$.next(this.cartList);
  }

  private CheckExistingIndex(product: ProductModel): number {
    return this.cartList.findIndex(c => c.product === product);
  }
}
