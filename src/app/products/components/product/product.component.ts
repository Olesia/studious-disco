import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
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
  @Output() addToCart: EventEmitter<ProductModel> = new EventEmitter<
    ProductModel
  >();

  // не думаю, что в этом компоненте нужна зависимость на роутер.
  // это сложная структура и если в родительском компоненте уже есть эта зависимость,
  // то лучше сгенерить аутпут.
  constructor(private router: Router) {}

  onBuy() {
    // Корзина почему-то у вас не обновляется после того, как первый раз в нее что-то добавили
    console.log(this.product.name + ' is added to the cart');
    this.addToCart.emit(this.product);
  }

  onShowReviews(id: number): void {
    const link = ['reviews', id];
    this.router.navigate(['', { outlets: { reviews: link } }]);
  }
}
