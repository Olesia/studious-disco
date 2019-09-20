import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.state';
import { selectRouterState } from './../router';
import { ProductModel } from 'src/app/products/models/product.model';

export const selectProductsState = createFeatureSelector<ProductsState>('products');

export const selectProductsData = createSelector(selectProductsState, (state: ProductsState) => state.data);
export const selectProductsError = createSelector(selectProductsState, (state: ProductsState) => state.error);
export const selectProductsLoaded = createSelector(selectProductsState, (state: ProductsState) => state.loaded);
export const selectProductsLoading = createSelector(selectProductsState, (state: ProductsState) => state.loading);

export const selectSelectedProductByUrl = createSelector(
    selectProductsData,
    selectRouterState,
    (products, router): ProductModel => {
        const productID = router.state.params.productID;
        if (productID && Array.isArray(products)) {
            return products.find(p => p.id === +productID);
        } else {
            return new ProductModel(0, '', '', 0, false, null, null);
        }
});
