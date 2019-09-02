import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ProductsService } from 'src/app/products/services/products.service';
import { ProductModel } from 'src/app/products/models/product.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  public products$: Observable<Array<ProductModel>>;
  constructor(public productsService: ProductsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.products$ = this.productsService.getProductsList();
  }

  onSetToDefaultClick() {
    this.productsService.setToDefault();
    this.products$ = this.productsService.getProductsList();
  }

  AddNewProduct() {
    this.router.navigate(['add'], { relativeTo: this.route});
  }

  onEditProduct(id: number) {
    this.router.navigate(['edit', id], { relativeTo: this.route});
  }
}
