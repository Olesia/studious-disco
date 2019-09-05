import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  AddNewProduct() {
    this.router.navigate(['add'], { relativeTo: this.route});
  }

  onEditProduct(id: number) {
    this.router.navigate(['edit', id], { relativeTo: this.route});
  }
}
