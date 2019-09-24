import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product: ProductModel;
  @Output() addToCart: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Output() showReviews: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  onBuy() {
    // Корзина почему-то у вас не обновляется после того, как первый раз в нее что-то добавили
    // она обновляется, просто я добавила дополнительную форму, чтобы выбрать размер и тд

    // console.log(this.product.name + ' is added to the cart');
    this.addToCart.emit(this.product);
  }

  onShowReviews(id: number): void {
    this.showReviews.emit(id);
  }
}
