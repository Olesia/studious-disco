import { ProductModel } from 'src/app/products/models/product.model';

export class CartItemModel {
  product: ProductModel;
  count: number;

  // Можно же добавить просто public для параметров
  // и убрать тело конструктора и объявление свойств
  constructor(product: ProductModel, count: number) {
    this.product = product;
    this.count = count;
  }
}
