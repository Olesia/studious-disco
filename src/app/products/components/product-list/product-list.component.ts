import { Component, OnInit } from '@angular/core';
import { ProductsService, ProductsPromiseService } from 'src/app/products/services';
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

  constructor(
    public productService: ProductsService,
    public productsPromiseService: ProductsPromiseService,
    public cartService: CartService,
    private router: Router, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.products = this.productsPromiseService.getProducts();
  }

  onProductAdded(product: ProductModel): void {
    const link = ['cart', 'add', product.id, false];
    this.router.navigate([{ outlets: { cart: link }}]);
  }
}
