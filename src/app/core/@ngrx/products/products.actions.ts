import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/products/models/product.model';

export const getProducts = createAction('[Products] GET_PRODUCTS');

export const getProductsSuccess = createAction(
  '[Products] GET_PRODUCTS_SUCCEESS',
  props<{ products: IProduct[] }>()
);

export const getProductsError = createAction(
  '[Products] GET_PRODUCTS_ERROR',
  props<{ error: Error | string }>()
);

export const createProduct = createAction(
  '[Products] CREATE_PRODUCT',
  props<{ product: IProduct }>()
);

export const createProductSuccess = createAction(
  '[Products API] CREATE_PRODUCT_SUCCESS',
  props<{ product: IProduct }>()
);

export const createProductError = createAction(
  '[Products API] CREATE_PRODUCT_ERROR',
  props<{ error: Error | string }>()
);

export const updateProduct = createAction(
  '[Products] UPDATE_PRODUCT',
  props<{ product: IProduct }>()
);

export const updateProductSuccess = createAction(
    '[Products API] UPDATE_PRODUCT_SUCCESS',
    props<{ product: IProduct }>()
  );

export const updateProductError = createAction(
    '[Products API] UPDATE_PRODUCT_ERROR',
    props<{ error: Error | string }>()
  );
