import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CartItemModel } from '../../models/cart-item-model';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class CartItemComponent {
  @Input() cartItem: CartItemModel;
  @Output() plusOne: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();
  @Output() minusOne: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();
  @Output() removeCartItem: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

  count = 1;

  constructor() { }

  plusOneCartItem(): void {
    this.plusOne.emit(this.cartItem);
  }

  minusOneCartItem(): void {
    this.minusOne.emit(this.cartItem);
  }

  removeProductFromCart(product: CartItemModel): void {
    this.removeCartItem.emit(product);
  }
}
