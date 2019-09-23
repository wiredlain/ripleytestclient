import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { retryWhen } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:any = [];

  constructor(public rest:ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = [];
    this.rest.getProducts(['mpm00003017074', '2000366985872p', 'mpm00001338695', '2000375925838p', '2000374667876p', '2000374782241p'])
    .pipe(retryWhen(_ => {
      return interval(5000)
    }))
    .subscribe((data: {}) => {
      console.log(data);
      this.products = data;
    });
  }

  viewProduct(sku: String) {
    this.router.navigate([`/view-product/${sku}`]);
  }

}
