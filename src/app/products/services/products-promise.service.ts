import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ProductModel, IProduct } from './../models/product.model';
import { ProductsServicesModule } from '../products-services.module';

@Injectable({
  providedIn: ProductsServicesModule
})

export class ProductsPromiseService {
  private productsUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts(): Promise<IProduct[]> {
    return this.http
      .get(this.productsUrl)
      .toPromise()
      .then(response => response as IProduct[])
      .catch(this.handleError);
  }

  getProduct(id: number): Promise<ProductModel> {
    const url = `${this.productsUrl}/${id}`;

    return this.http
      .get(url)
      .toPromise()
      .then(response => response as ProductModel)
      .catch(this.handleError);
  }

  getReviewsByProductId(id: number): Promise<Array<string>> {
    const url = `${this.productsUrl}/${id}`;

    return this.http
      .get(url)
      .toPromise()
      .then(response => (response as ProductModel).reviews)
      .catch(this.handleError);
  }

  addProduct(product: ProductModel): Promise<ProductModel> {
    const url = this.productsUrl;
    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http
      .post(url, body, options)
      .toPromise()
      .then(response => response as ProductModel)
      .catch(this.handleError);
  }

  updateProduct(product: ProductModel): Promise<ProductModel> {
    const url = `${this.productsUrl}/${product.id}`;
    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .put(url, body, options)
      .toPromise()
      .then(response => response as ProductModel)
      .catch(this.handleError);
  }

  resetProducts(products: ProductModel[]): Promise<ProductModel> {
    const url = this.productsUrl;
    const body = JSON.stringify(products);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http
      .post(url, body, options)
      .toPromise()
      .then(response => response as ProductModel[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
