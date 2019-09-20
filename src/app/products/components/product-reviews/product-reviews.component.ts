import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductsPromiseService } from '../..';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {
  reviewsList: Promise<Array<string>>;

  constructor(
    private productsPromiseService: ProductsPromiseService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
        this.reviewsList = this.productsPromiseService.getReviewsByProductId(+params.get('productID'))))
      .subscribe(
        err => console.log(err)
    );
  }

}
