import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { ProductModel } from 'src/app/products/models/product.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsPromiseService, ProductsObservableService } from 'src/app/products';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  // public products$: Observable<Array<ProductModel>>;

  constructor(
    public productsService: ProductsService,
    public productsObservableService: ProductsObservableService,
    public productsPromiseService: ProductsPromiseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
}

  AddNewProduct() {
    this.router.navigate(['add'], { relativeTo: this.route});
  }

  onEditProduct(id: number) {
    this.router.navigate(['edit', id], { relativeTo: this.route});
  }
}
