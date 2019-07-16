import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { ProductModel } from '../../models/product.model';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: Array<ProductModel>;

  constructor(public productService: ProductsService, public cartService: CartService) { }

  onProductAdded(product: ProductModel): void {
    this.cartService.addProduct(product);
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
