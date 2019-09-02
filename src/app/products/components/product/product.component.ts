import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product: ProductModel;
  @Output() addToCart: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor(private router: Router) { }

  onBuy() {
    console.log(this.product.name + ' is added to the cart');
    this.addToCart.emit(this.product);
  }

  onShowReviews(id: number): void {
    const link = ['reviews', id];
    this.router.navigate(['', { outlets: { reviews: link } }]);
  }
}
