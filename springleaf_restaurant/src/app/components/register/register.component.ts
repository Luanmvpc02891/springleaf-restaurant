import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/interfaces/user';
import { UserHeaderComponent } from 'src/app/user/components/user-home/user-header/user-header.component';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  username: string = '';
  password: string = '';
  phone: string = '';
  email: string = '';
  address: number | null = null;
  image: string = '';
  managerId:  number | null = null; 
  restaurantBranchId: number | null = null;
  roleId: number | null = null;
  user: User | null = null;

  constructor(private authService: AuthenticationService) {
    // Đăng ký để theo dõi sự thay đổi trong userCache từ AuthenticationService
    this.authService.cachedData$.subscribe((user) => {
      this.user = user;
    });
  }

  register() {
    if (this.username && this.password && this.firstName) {
      if (this.address === null) {
        this.address = 0; // Hoặc giá trị mặc định bạn muốn
      }
      if (this.managerId === null) {
        this.managerId = 0; // Hoặc giá trị mặc định bạn muốn
    }
    if (this.restaurantBranchId === null) {
      this.restaurantBranchId = 0; // Hoặc giá trị mặc định bạn muốn
  }if (this.roleId === null) {
    this.roleId = 0; // Hoặc giá trị mặc định bạn muốn
}
        this.authService.register(
            this.firstName,
            this.lastName,
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


  logout(){
    this.authService.logout;
  }
}