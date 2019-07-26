import { ProductModel } from 'src/app/products/models/product.model';

export class CartItemModel {
  constructor(
    public product: ProductModel,
    public count: number) {
  }
}
