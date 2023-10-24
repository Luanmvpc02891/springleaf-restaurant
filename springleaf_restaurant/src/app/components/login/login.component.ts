import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  active: string = "login";
  fullName: string = '';
  username: string = '';
  password: string = '';
  phone: string = '';
  email: string = '';
  address: number | null = null;
  image: string = '';
  managerId: number | null = null;
  restaurantBranchId: number | null = null;
  roleId: number | null = null;
  user: User | null = null;

  getDatasOfThisUserWorker: Worker;

  constructor(private authService: AuthenticationService,
    public activeModal: NgbActiveModal, private apiService: ApiService) {
    // Đăng ký để theo dõi sự thay đổi trong userCache từ AuthenticationService
    this.authService.cachedData$.subscribe((user) => {
      this.user = user;
    });
    this.getDatasOfThisUserWorker = new Worker(new URL('../../workers/user/user-call-all-apis.worker.ts', import.meta.url));
  }

  // modal open form 
  onLoginTab(): void {
    this.active = "login";
  }

  onRegisterTab(): void {
    this.active = "register";
  }

  async login() {
    if (this.username && this.password) {
      if(await this.authService.login(this.username, this.password) === true){
        this.activeModal.close('Login Successful');
        }
      }
  }

  loginWithGoogle() {

  }

  register() {
    if (this.username && this.password && this.fullName) {
      if (this.address === null) {
        this.address = 0; // Hoặc giá trị mặc định bạn muốn
      }
      if (this.managerId === null) {
        this.managerId = 0; // Hoặc giá trị mặc định bạn muốn
      }
      if (this.restaurantBranchId === null) {
        this.restaurantBranchId = 0; // Hoặc giá trị mặc định bạn muốn
      } if (this.roleId === null) {
        this.roleId = 0; // Hoặc giá trị mặc định bạn muốn
      }
      this.authService.register(
        this.fullName,
        this.username,
        this.password,
        this.phone,
        this.email,
        this.address,
        this.image,
        this.managerId,
        this.restaurantBranchId,
        this.roleId
      ).subscribe(
        (response) => {
          // Handle the response from the service after successful registration
          console.log('Registration successful');
          // Navigate or perform the next action here
        },
        (error) => {
          console.error('Registration failed:', error);
          // Handle registration error here if needed
        }
      );
    } else {
      console.error('Please enter username, password, and first name.');
    }
  }

}
