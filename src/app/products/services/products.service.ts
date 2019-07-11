import { Injectable } from '@angular/core';
import { Product } from '../models/product-model';
import { ProductCategory } from '../models/product-category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): Array<Product> {
    return [
      new Product(1, 'Dress', 'Summer dress', 300, true, ProductCategory.Clothing, [36, 38, 40, 42,44,46]),
      new Product(2, 'Skirt', 'Nice skirt', 150, true, ProductCategory.Clothing, [36, 38, 40, 42,44,46]),
      new Product(3, 'Pants', 'Pants description', 200, true, ProductCategory.Clothing, [36, 38, 40, 42,44,46]),
      new Product(4, 'Boots', 'Boots decription', 500, true, ProductCategory.Shoes, [36, 37, 38, 40, 41]),
    ];
  }
  constructor() { }
}
