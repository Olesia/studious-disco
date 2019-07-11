import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service' 
import { Product } from 'src/app/products/models/product-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private sub: Subscription;
  cartList: Array<Product>;
  
  constructor(public cartService: CartService) { }
  removeProductFromCart(product){
    this.cartService.removeProduct(product);
  }
  ngOnInit() {
    this.sub = this.cartService.cartList$.subscribe(
      data => (this.cartList = data)
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
