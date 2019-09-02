import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(public cartService: CartService, public localStorage: LocalStorageService) { }

  ngOnInit() {
    this.SaveOrderToLocalStorage();
    this.cartService.clearCart();
  }

  private SaveOrderToLocalStorage() {
    this.cartService.getCartItemsList()
    .subscribe(order => {
      const orders = JSON.parse(this.localStorage.getItem('orders')) || [];
      orders.push(order);
      this.localStorage.setItem('orders', JSON.stringify(orders));
    });
  }

}
