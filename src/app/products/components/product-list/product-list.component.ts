import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { ProductModel } from '../../models/product.model';
import { CartService } from 'src/app/cart/services/cart.service';
import { CartItemModel } from 'src/app/cart/models/cart-item-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: Array<ProductModel>;

  constructor(public productService: ProductsService, public cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onProductAdded(product: ProductModel): void {
    if (product.isAvailable) {
      this.cartService.addProduct(new CartItemModel(product, 1));
    }
  }
}
