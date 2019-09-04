import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItemModel } from '../../models/cart-item-model';
import { CartService } from '../../services/cart.service';
import { ProductsPromiseService } from 'src/app/products';

@Component({
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {

  cartItem: CartItemModel;

  @ViewChild('sizeSelect', { static: false }) selectedSize: ElementRef;

  private isDeletedParam: boolean;

  constructor(
    private productsPromiseService: ProductsPromiseService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.cartItem = new CartItemModel(null, 1);
    const id = +this.route.snapshot.paramMap.get('cartItemId');
    this.isDeletedParam = JSON.parse(this.route.snapshot.paramMap.get('isDeleted'));
    this.productsPromiseService.getProduct(id)
      .then( product => {
          this.cartItem = {...new CartItemModel(product, 1)};
        },
        err => console.log(err)
      );
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
