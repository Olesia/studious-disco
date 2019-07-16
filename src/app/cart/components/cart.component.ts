import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductModel } from 'src/app/products/models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit, OnDestroy {
  cartList: Array<ProductModel>;
  totalPrice: number;
  totalCount: number;

  private sub: Subscription;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.sub = this.cartService.cartList$.subscribe(
      data => (this.cartList = data,
        this.totalPrice = 0,
        this.totalCount = 0,

        this.cartList.forEach(element => {
          this.totalPrice += element.price;
          this.totalCount ++;
        })),
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  removeProductFromCart(product: ProductModel) {
    this.cartService.removeProduct(product);
  }
}
