import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { ProductModel } from '../../models/product.model';
import { CartService } from 'src/app/cart/services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: Promise<Array<ProductModel>>;

  constructor(public productService: ProductsService, public cartService: CartService,
              private router: Router, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.products = Promise.resolve(this.productService.getProducts());
  }

  onProductAdded(product: ProductModel): void {
    const link = ['cart', 'add', product.id, false];
    this.router.navigate([{ outlets: { cart: link }}]);
  }
}
