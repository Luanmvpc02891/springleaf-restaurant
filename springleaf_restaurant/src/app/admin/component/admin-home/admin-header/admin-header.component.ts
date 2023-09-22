import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
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
  }
}
