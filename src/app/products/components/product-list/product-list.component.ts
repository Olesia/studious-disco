import { Component, OnInit } from '@angular/core';
import { ProductsPromiseService } from 'src/app/products/services';
import { ProductModel } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: Promise<Array<ProductModel>>;

  constructor(
    public productsPromiseService: ProductsPromiseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.products = this.productsPromiseService.getProducts();
  }

  onProductAdded(product: ProductModel): void {
    const link = ['cart', 'add', product.id, false];
    this.router.navigate([{ outlets: { cart: link }}]);
  }
}
