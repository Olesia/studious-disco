import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsObservableService } from 'src/app/products';
import { Subscription } from 'rxjs';
import { ProductModel } from 'src/app/products/models/product.model';

@Component({
  selector: 'app-manage-products-list',
  templateUrl: './manage-products-list.component.html',
  styleUrls: ['./manage-products-list.component.css']
})
export class ManageProductsListComponent implements OnInit {
  public products: Array<ProductModel> = [];
  private sub: Subscription;

  constructor(
    public productsObservableService: ProductsObservableService,
    private router: Router
  ) { }

  ngOnInit() {
    // отписки не будет?
    this.sub = this.productsObservableService.getProducts()
    .subscribe(
      data => (
        this.products = data
    ));
  }

  onEditProduct(id: number) {
    this.router.navigate(['admin', 'products', 'edit', id]);
  }
}
