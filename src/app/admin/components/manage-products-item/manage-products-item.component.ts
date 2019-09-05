import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';

@Component({
  selector: 'app-manage-products-item',
  templateUrl: './manage-products-item.component.html',
  styleUrls: ['./manage-products-item.component.css']
})
export class ManageProductsItemComponent {
  @Input() product: ProductModel;
  @Output() editProduct = new EventEmitter<number>();

  onEditProduct() {
    this.editProduct.emit(this.product.id);
  }
}
