import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { CartItemModel } from '../../models/cart-item-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit, OnDestroy {
  cartList: Array<CartItemModel>;
  totalPrice: number;
  totalCount: number;

  private sub: Subscription;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.sub = this.cartService.cartList$.subscribe(
      data => (
        this.cartList = data,
        this.totalPrice = this.cartService.totalPrice,
        this.totalCount = this.cartService.totalCount
    ));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onCartItemRemoving(product: CartItemModel): void {
    this.cartService.removeProduct(product);
  }

  onPlusOne(cartItem: CartItemModel): void {
    this.cartService.plusOneCartItem(cartItem);
  }

  onMinusOne(cartItem: CartItemModel): void {
    this.cartService.minusOneCartItem(cartItem);
  }
}
