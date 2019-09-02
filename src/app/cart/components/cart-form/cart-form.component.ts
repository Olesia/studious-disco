import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/products/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItemModel } from '../../models/cart-item-model';
import { CartService } from '../../services/cart.service';
import { ProductModel } from 'src/app/products/models/product.model';

@Component({
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit, OnDestroy {

  cartItem: CartItemModel;

  @ViewChild('sizeSelect', { static: false }) selectedSize: ElementRef;

  private sub: Subscription;
  private isDeletedParam: boolean;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.cartItem = new CartItemModel(null, 1);
    const id = +this.route.snapshot.paramMap.get('cartItemId');
    this.isDeletedParam = JSON.parse(this.route.snapshot.paramMap.get('isDeleted'));
    this.sub = this.productsService.getProductById(id)
      .subscribe(
        product => {
          const productCopy = new ProductModel(product.id, product.name, product.description, product.price,
            product.isAvailable, product.category, product.availableSizes, product.selectedSize, product.reviews);
          this.cartItem = {...new CartItemModel(productCopy, 1)};
        },
        err => console.log(err)
      );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSelectChange() {
    this.cartItem.product.selectedSize = this.selectedSize.nativeElement.value;
  }
  onSaveCartItem() {
    const cartItemToSave = {...this.cartItem};
    if (!this.isDeletedParam) {
      this.cartService.addProduct(cartItemToSave);
    } else {
      this.cartService.removeProduct(cartItemToSave);
    }
    this.onGoBack();
  }

  onGoBack() {
    this.router.navigate(['./../../../'], { relativeTo: this.route});
  }


}
