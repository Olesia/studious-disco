import { IProduct, ProductModel } from 'src/app/products/models/product.model';
import { ProductCategory } from 'src/app/products/models/product-category.enum';

export interface ProductsState {
  data: ReadonlyArray<IProduct>;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const initialProductsState: ProductsState = {
    data: [
    ],
    loading: false,
    loaded: false,
    error: null
};
