import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsObservableService, ProductsPromiseService, ProductsService } from 'src/app/products';
import { Observable, Subscription } from 'rxjs';
import { ProductModel } from 'src/app/products/models/product.model';

@Component({
  selector: 'app-manage-products-list',
  templateUrl: './manage-products-list.component.html',
  styleUrls: ['./manage-products-list.component.css']
})
export class ManageProductsListComponent implements OnInit {
  public products$: Observable<Array<ProductModel>>;
  public products: Array<ProductModel>;
  private sub: Subscription;

  constructor(
    public productsService: ProductsService,
    public productsObservableService: ProductsObservableService,
    public productsPromiseService: ProductsPromiseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.productsObservableService.getProducts()
    .subscribe(
      data => (
        this.products = data
    ));
  }

  onSetToDefaultClick() {
    // const defaultProducts = this.productsService.getDefaultProductsList();
    // this.productsPromiseService.resetProducts(defaultProducts);
  }

  onEditProduct(id: number) {
    this.router.navigate(['admin', 'products', 'edit', id]);
  }

}
