import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class HeaderComponent {
  navbarfixed: boolean = false;
  scrollCounter: number = 0;
  previousScrollY = 0;

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY >= this.previousScrollY || window.scrollY === 0) {
      this.previousScrollY = window.scrollY;
      this.navbarfixed = false;
    } else {
      this.previousScrollY = window.scrollY;
      this.navbarfixed = true;
    }
  }
}