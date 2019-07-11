import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  @Input() product: ProductModel;

  constructor(public cartService: CartService) { }

  onBuy() {
    console.log(this.product.name + ' is added to the cart');
    this.cartService.addProduct(this.product);
  }
}
