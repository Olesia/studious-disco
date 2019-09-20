import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects, OnRunEffects, EffectNotification } from '@ngrx/effects';
import * as ProductsActions from './products.actions';

// rxjs
import { Observable } from 'rxjs';
import { switchMap, pluck, concatMap, map, tap, takeUntil } from 'rxjs/operators';

import { ProductsPromiseService } from './../../../products/services';
import { IProduct, ProductModel } from 'src/app/products/models/product.model';
import * as RouterActions from './../router/router.actions';

@Injectable()
export class ProductsEffects implements OnInitEffects { // OnRunEffects
  constructor(
    private actions$: Actions,
    private productsPromiseService: ProductsPromiseService) { }

  getProducts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.getProducts),
      switchMap(action =>
        this.productsPromiseService
          .getProducts()
          .then(products => ProductsActions.getProductsSuccess({ products }))
          .catch(error => ProductsActions.getProductsError({ error }))
      )
    )
  );

  updateProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.updateProduct),
      pluck('product'),
      concatMap((product: ProductModel) =>
        this.productsPromiseService
          .updateProduct(product)
          .then((updatedProduct: IProduct) => {
            return ProductsActions.updateProductSuccess({ product: updatedProduct });
          })
          .catch(error => ProductsActions.updateProductError({ error }))
      )
    )
  );

  createProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.createProduct),
      pluck('product'),
      concatMap((product: ProductModel) =>
        this.productsPromiseService
          .addProduct(product)
          .then((createdProduct: IProduct) => {
            return ProductsActions.createProductSuccess({ product: createdProduct });
          })
          .catch(error => ProductsActions.createProductError({ error }))
      )
    )
  );

  createUpdateProductSuccess$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsActions.createProductSuccess, ProductsActions.updateProductSuccess),
      map(action =>
        RouterActions.go({
          path: ['/admin/products']
        })
      )
    );
  });

  ngrxOnInitEffects(): Action {
    console.log('ngrxOnInitEffects is called!!!');
    return { type: '[SomeEffects]: Init' };
  }

  // ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>) {
  //   return resolvedEffects$.pipe(
  //     tap(val => console.log('ngrxOnRunEffects:', val)),
  //     takeUntil(this.actions$.pipe(ofType(ProductsActions.createProduct)))
  //   );
  // }
}
