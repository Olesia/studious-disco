import { Action, createReducer, on } from '@ngrx/store';

import { ProductsState, initialProductsState } from './products.state';
import * as ProductsActions from './products.actions';

const reducer = createReducer(
    initialProductsState,
    on(ProductsActions.getProducts, state => {
        console.log('GET_PRODUCTS action being handled!');
        return {
            ...state,
            loading: true
        };
    }),

    on(ProductsActions.createProduct, state => {
        console.log('CREATE_PRODUCT action being handled!');
        return { ...state };
    }),

    on(ProductsActions.updateProduct, state => {
        console.log('UPDATE_PRODUCT action being handled!');
        return { ...state };
    }),

    on(ProductsActions.getProductsSuccess, (state, props) => {
        console.log('GET_PRODUCTS_SUCCESS action being handled!');
        const data = [...props.products];
        return {
            ...state,
            data,
            loading: false,
            loaded: true,
           // selectedProduct: null
        };
    }),

    on(ProductsActions.getProductsError, (state, props) => {
        console.log('GET_PRODUCTS_ERROR action being handled!');
        const error = props.error;
        return {
            ...state,
            loading: false,
            loaded: false,
            error
        };
    }),

    on(ProductsActions.updateProductSuccess, (state, props) => {
        console.log('UPDATE_PRODUCT_SUCCESS action being handled!');
        const data = [...state.data];
        const product = props.product;

        const index = data.findIndex(t => t.id === product.id);

        data[index] = { ...product };

        return {
            ...state,
            data
        };
    }),

    on(ProductsActions.updateProductError, (state, props) => {
        console.log('UPDATE_PRODUCT_ERROR action being handled!');
        const error = props.error;
        return {
            ...state,
            error
        };
    }),

    on(ProductsActions.createProductSuccess, (state, props) => {
        console.log('CREATE_PRODUCT_SUCCESS action being handled!');
        const product = { ...props.product };
        const data = [...state.data, product];

        return {
            ...state,
            data
        };
    }),

    on(ProductsActions.createProductError, (state, props) => {
        console.log('CREATE_PRODUCT_ERROR action being handled!');
        const error = props.error;
        return {
            ...state,
            error
        };
    }),

);
export function productsReducer(state: ProductsState | undefined, action: Action) {
    return reducer(state, action);
}
