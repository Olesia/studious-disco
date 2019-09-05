import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { CartItemModel } from 'src/app/cart/models/cart-item-model';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
  ordersList: Array<CartItemModel> [];
  constructor(public localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.ordersList = JSON.parse(this.localStorageService.getItem('orders'));
  }

  clearOrders() {
    this.ordersList.length = 0;
    this.localStorageService.removeItem('orders');
  }
}
