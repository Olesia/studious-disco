import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service'
import { Product } from '../../models/product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;
  constructor(public productService: ProductsService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
