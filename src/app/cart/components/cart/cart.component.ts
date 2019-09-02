import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { CartItemModel } from '../../models/cart-item-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartList$: Observable<Array<CartItemModel>>;
  totalPrice: number;
  totalCount: number;
  sortByField = 'name';
  sortIsDesc = true;
  private sub: Subscription;

  @ViewChild('selectSort', { static: false }) selectedValue: ElementRef;
  @ViewChild('isDesc', { static: false }) selectedDesc: ElementRef;

  constructor(public cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.sortIsDesc = true;
    this.cartList$ = this.cartService.getCartItemsList();
    this.totalPrice = this.cartService.totalPrice;
    this.totalCount = this.cartService.totalCount;
    this.sub = this.cartService.cartList$.subscribe(
      data => (
        this.totalPrice = this.cartService.totalPrice,
        this.totalCount = this.cartService.totalCount
    ));
  }

  onCheckBoxChange() {
    this.sortIsDesc = this.selectedDesc.nativeElement.checked;
  }

  onSelectChange() {
    this.sortByField = this.selectedValue.nativeElement.value;
  }

  onCartItemRemoving(cartItem: CartItemModel): void {
    const link = ['cart', 'remove', cartItem.product.id, true];
    this.router.navigate([{ outlets: { cart: link }}]);
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

  onOrderCreating(): void {
    this.router.navigate(['order']);
  }
}
