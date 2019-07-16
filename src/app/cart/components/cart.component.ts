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

  private sub: Subscription;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.sub = this.cartService.cartList$.subscribe(
      data => (this.cartList = data,
        this.totalPrice = 0,
        // обычно в реальности еще будет фигурировать количество
        this.cartList.forEach(element => {
          this.totalPrice += element.price;
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
