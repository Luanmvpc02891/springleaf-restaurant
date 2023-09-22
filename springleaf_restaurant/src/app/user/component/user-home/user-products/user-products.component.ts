import { Product } from './../../../interface/products';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/products.service';
declare var $: any;
@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent {

  products: Product[] = [];

  constructor(private productsService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getProducts();
    // Sử dụng jQuery để thực thi mã từ tệp custom.js
    $.getScript('./assets/js/main.js', function () {
      // Mã JavaScript từ tệp custom.js sẽ được thực thi ở đây.

    });
    $.getScript('./assets/js/map-custom.js', function () {
      // Mã JavaScript từ tệp custom.js sẽ được thực thi ở đây.

    });
    $.getScript('./assets/js/slick-custom.js', function () {
      // Mã JavaScript từ tệp custom.js sẽ được thực thi ở đây.

    });
  }

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(categories => this.products = categories);
  }

}
