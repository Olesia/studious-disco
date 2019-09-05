import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ProductCategory } from '../models/product-category.enum';
import { of, Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsListDefault: Array<ProductModel>;
  productsList: Array<ProductModel>;

  constructor(public localStorageService: LocalStorageService) {
    this.productsListDefault = [
      new ProductModel(1, 'Dress', 'Summer dress', 300, false, ProductCategory.Clothing, [36, 38, 40, 42, 44, 46],
        36, ['review #11', 'review #12']),
      new ProductModel(2, 'Skirt', 'Nice skirt', 150, true, ProductCategory.Clothing, [36, 38, 40, 42, 44, 46],
        36, ['review #21', 'review #22']),
      new ProductModel(3, 'Pants', 'Pants description', 200, true, ProductCategory.Clothing, [36, 38, 40, 42, 44, 46],
        36, ['review #31', 'review #32', 'review #33']),
      new ProductModel(4, 'Boots', 'Boots decription', 500, true, ProductCategory.Shoes, [36, 37, 38, 40, 41],
        36, ['review #41']),
    ];
  }

  getProducts(): Array<ProductModel> {
    this.checkProducts();
    return this.productsList;
  }

  getProductsList(): Observable<ProductModel[]> {
    this.checkProducts();
    const result: Observable<Array<ProductModel>> = of(this.productsList);
    return result;
  }

  addProduct(product: ProductModel) {
    this.productsList.push(product);
    this.localStorageService.setItem('products', JSON.stringify(this.productsList));
  }

  editProduct(product: ProductModel) {
    const i = this.productsList.findIndex(c => c.id === product.id);
    if (i > -1) {
      this.productsList.splice(i, 1, product);
    }
    this.localStorageService.setItem('products', JSON.stringify(this.productsList));
  }

  setToDefault() {
    this.productsList = this.productsListDefault;
    this.localStorageService.setItem('products', JSON.stringify(this.productsList));
  }

  getDefaultProductsList() {
    return this.productsListDefault;
  }

  getProductReviews(id: number) {
    const result = this.productsList.filter(c => c.id === id).map(c => c.reviews);
    return result;
  }

  getProductById(id: number) {
    return of(this.productsList.find(c => c.id === id));
  }

  private checkProducts() {
    if (!this.localStorageService.getItem('products')) {
      this.setToDefault();
    } else {
      this.productsList = JSON.parse(this.localStorageService.getItem('products'));
    }
  }
}
