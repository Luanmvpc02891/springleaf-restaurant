import { Component, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/app/component/login/login.component';
import { LoginModule } from 'src/app/component/login/login.module';
declare var $: any;
@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent {
  navbarfixed: boolean = false; // Hiện header
  scrollCounter: number = 0;
  previousScrollY = 0;

  constructor(private modalService: NgbModal) { }

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY >= this.previousScrollY || window.scrollY === 0) {
      this.previousScrollY = window.scrollY;
      this.navbarfixed = false;
    } else {
      this.previousScrollY = window.scrollY;
      this.navbarfixed = true;
    }
  }

  openLoginModal() {
    const modalRef = this.modalService.open(LoginComponent, { size: 'lg' });
    //modalRef.componentInstance.product = product;
  }
  ngOnInit(): void {
    // Sử dụng jQuery để thực thi mã từ tệp custom.js
    $.getScript('./assets/css/util.css', function () {
      // Mã JavaScript từ tệp custom.js sẽ được thực thi ở đây.

    });
    $.getScript('./assets/css/main.css', function () {
      // Mã JavaScript từ tệp custom.js sẽ được thực thi ở đây.

    });

  }
}