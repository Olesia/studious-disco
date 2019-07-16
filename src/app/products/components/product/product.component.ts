import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: ProductModel;
  @Output() addToCart: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() {}

  onBuy() {
    console.log(this.product.name + ' is added to the cart');
    this.addToCart.emit(this.product);
  }
}
