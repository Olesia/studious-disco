import { ProductModel } from 'src/app/products/models/product.model';

export class CartItemModel {
    product: ProductModel;
    count: number;

    constructor(product: ProductModel, count: number) {
        this.product = product;
        this.count = count;
    }
}
