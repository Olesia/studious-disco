import { Component } from '@angular/core';
import { ProductModel } from './products/models/product.model';
import { CartComponent } from './cart/components/cart.component';
import { CartService } from './cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
}
