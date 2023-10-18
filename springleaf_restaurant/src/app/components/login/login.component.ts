import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/interfaces/user';
import { UserHeaderComponent } from 'src/app/user/components/user-home/user-header/user-header.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
openRegisterModal() {
throw new Error('Method not implemented.');
}
  username: string = '';
  password: string = '';
  user: User | null = null;

  constructor(private authService: AuthenticationService) {
    // Đăng ký để theo dõi sự thay đổi trong userCache từ AuthenticationService
    this.authService.cachedData$.subscribe((user) => {
      this.user = user;
    });
  }

  login() {
    if (this.username && this.password) {
      this.authService.login(this.username, this.password).subscribe(
        (response) => {
          // Xử lý phản hồi từ service sau khi đăng nhập thành công
          console.log('Login successful');
          this.authService.setUserCache(response.user); // Cập nhật userCache
        },
        (error) => {
          console.error('Login failed:', error);
          // Xử lý lỗi đăng nhập ở đây nếu cần
        }
      );
    } else {
      console.error('Please enter both username and password.');
    }
  }

  loginWithGoogle(){

  }

  // register() {
  //   if (this.username && this.password) {
  //     this.authService.register(this.username, this.password).subscribe(
  //       (response) => {
  //         // Xử lý phản hồi từ service sau khi đăng ký thành công
  //         console.log('Registration successful');
  //         // Điều hướng hoặc thực hiện hành động tiếp theo tại đây
  //       },
  //       (error) => {
  //         console.error('Registration failed:', error);
  //         // Xử lý lỗi đăng ký ở đây nếu cần
  //       }
  //     );
  //   } else {
  //     console.error('Please enter both username and password.');
  //   }
  // }
  logout(){
    this.authService.logout;
  }
}
