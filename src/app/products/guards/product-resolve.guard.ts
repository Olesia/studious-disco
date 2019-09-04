import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

// rxjs
import { Observable, of } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';

import { ProductModel } from './../models/product.model';
import { ProductsModule } from '../products.module';
import { ProductCategory } from '../models/product-category.enum';
import { ProductsObservableService } from '..';

@Injectable({
  providedIn: ProductsModule
})
export class ProductResolveGuard implements Resolve<ProductModel> {
  constructor(
    private productObservableService: ProductsObservableService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ProductModel | null> {
    if (!route.paramMap.has('productID')) {
      return of(new ProductModel(0, '', '', 0, false, ProductCategory.Clothing, [36, 38, 40, 42, 44, 46],
      36, []));
    }

    const id = +route.paramMap.get('productID');

    return this.productObservableService.getProduct(id).pipe(
      map((product: ProductModel) => {
        if (product) {
          return product;
        } else {
          this.router.navigate(['admin', 'products']);
          return null;
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['admin', 'products']);
        return of(null);
      })
    );
  }
}

