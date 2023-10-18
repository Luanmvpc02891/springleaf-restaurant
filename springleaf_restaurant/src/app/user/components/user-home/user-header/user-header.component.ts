import { Component, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { User } from 'src/app/interfaces/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent {
  navbarfixed: boolean = false; // Hiện header
  scrollCounter: number = 0;
  previousScrollY = 0;
  user: User | null = null;

  constructor(private modalService: NgbModal, private authService: AuthenticationService) {
    this.authService.cachedData$.subscribe((data) => {
      this.user = data;
      // Cập nhật thông tin người dùng từ userCache khi có sự thay đổi
    });
  }

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
    const modalRef = this.modalService.open(LoginComponent);
  }

  openRegisterModal() {
    const modalRef = this.modalService.open(RegisterComponent);
  }

  logOut(){
    this.authService.logout();
  }

  ngOnInit(): void {
    this.user = this.authService.getUserCache(); // Lấy thông tin người dùng từ userCache
  }
}