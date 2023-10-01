import { Component, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/app/components/login/login.component';

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

  }
}