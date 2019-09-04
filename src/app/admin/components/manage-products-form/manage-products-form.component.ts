import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { ProductsPromiseService, ProductsObservableService } from 'src/app/products';

@Component({
  selector: 'app-manage-products-form',
  templateUrl: './manage-products-form.component.html',
  styleUrls: ['./manage-products-form.component.css']
})

export class ManageProductsFormComponent implements OnInit {
  product: ProductModel;
  originalProduct: ProductModel;
  constructor(
    public productsPromiseService: ProductsPromiseService,
    public productObservableService: ProductsObservableService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data.pipe(pluck('product')).subscribe((product: ProductModel) => {
      this.product = { ...product };
    });
  }

  onSaveProduct() {
    const product = { ...this.product };
    if (product.id === 0) {
      this.productsPromiseService.addProduct(this.product)
        .then(c => this.onGoBack());
    } else {
      this.productObservableService.updateProduct(this.product).subscribe(c => this.onGoBack());
    }
  }
  onGoBack() {
    this.router.navigate(['admin', 'products']);
  }
}
