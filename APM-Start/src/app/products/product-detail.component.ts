import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from './product.service';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle : string = 'Product Detail: ';
  products: IProduct[] = [];
  product : IProduct;
  productId: string;
  errorMessage: any;
  imageWidth: number = 100;
  imageMargin: number = 10;

  constructor (private route: ActivatedRoute,
               private router: Router,
               private productService : ProductService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `${id}`;
    this.productId = `${id}`;

    this.productService.getProducts().subscribe(
      products => {
          this.products = products;
      },
      error => this.errorMessage = <any> error
  );

  }

  onBack() : void {
    this.router.navigate(['/products']);
  }

}
