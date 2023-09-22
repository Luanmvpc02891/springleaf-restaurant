import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-user-product-detail',
  templateUrl: './user-product-detail.component.html',
  styleUrls: ['./user-product-detail.component.css']
})
export class UserProductDetailComponent {
  constructor() { }
  ngOnInit(): void {
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
}
