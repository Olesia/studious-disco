import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';
import { ProductCategory } from 'src/app/products/models/product-category.enum';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products/services/products.service';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-manage-products-form',
  templateUrl: './manage-products-form.component.html',
  styleUrls: ['./manage-products-form.component.css']
})
export class ManageProductsFormComponent implements OnInit {
  product: ProductModel;
  originalProduct: ProductModel;
  constructor(public productsService: ProductsService,
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
      this.productsService.addProduct(this.product);
      this.onGoBack();
    } else {
      this.productsService.editProduct(this.product);
      this.onGoBack();
    }
  }
  onGoBack() {
    this.router.navigate(['./../'], { relativeTo: this.route});
  }
}
