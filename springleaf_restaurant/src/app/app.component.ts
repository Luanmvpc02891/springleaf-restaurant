import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'springleaf_restaurant';
  ngOnInit(): void {
    // Sử dụng jQuery để thực thi mã từ tệp custom.js
    $.getScript('./assets/vendor/adminx.js', function () {
      // Mã JavaScript từ tệp custom.js sẽ được thực thi ở đây.

    });
    $.getScript('./assets/vendor/vendor.js', function () {
      // Mã JavaScript từ tệp custom.js sẽ được thực thi ở đây.

    });
    $.getScript('./assets/css/adminx.css', function () {
      // Mã JavaScript từ tệp custom.js sẽ được thực thi ở đây.

    });
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
    $.getScript('./assets/js/slick-custom.js', function () {
      // Mã JavaScript từ tệp custom.js sẽ được thực thi ở đây.

    });
  }
}
