import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {
  reviewsList: string[] = [];

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => this.productsService.getProductReviews(+params.get('productID'))))
      .subscribe(
        review => this.reviewsList = review,
        err => console.log(err)
    );
  }

}
