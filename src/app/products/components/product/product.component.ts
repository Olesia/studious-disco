import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product-model';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  @Input() 
  product : Product;

  constructor(public cartService: CartService) { }

  onBuy() {
    console.log("Buying of product");
    this.cartService.addProduct(this.product);
  }

  ngOnInit() {
  }

}
