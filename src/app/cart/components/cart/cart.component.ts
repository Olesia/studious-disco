import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
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
  sortByField = 'name';
  sortIsDesc = true;
  private sub: Subscription;

  @ViewChild('selectSort', { static: false }) selectedValue: ElementRef;
  @ViewChild('isDesc', { static: false }) selectedDesc: ElementRef;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.sortIsDesc = true;
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

  onCheckBoxChange() {
    this.sortIsDesc = this.selectedDesc.nativeElement.checked;
  }

  onSelectChange() {
    this.sortByField = this.selectedValue.nativeElement.value;
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

  onClearCart(): void {
    this.cartService.clearCart();
  }
}
