import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../interfaces/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'v1/auth'; // Thay thế bằng URL của Spring Boot API
  private userCache: User | null = null;
  private cachedDataSubject = new BehaviorSubject<User | null>(null);
  getDatasOfThisUserWorker: Worker;

  constructor(private http: HttpClient, private apiService: ApiService) {
    
    this.getDatasOfThisUserWorker = new Worker(new URL('../workers/user/user-call-all-apis.worker.ts', import.meta.url));
  }

  // Đây là một observable để theo dõi sự thay đổi trong userCache
  cachedData$: Observable<User | null> = this.cachedDataSubject.asObservable();

  setUserCache(user: User | null) {
    this.userCache = user;
    this.cachedDataSubject.next(user);
  }

  register(firstName: string, lastName: string,  username: string, password: string, phone: string, email: string,
    address: number, image: string, managerId:  number, restaurantBranchId: number, roleId: number ): Observable<any> {
    const registerData = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
      phone: phone,
      email: email,
      address: address,
      image: image,
      managerId: null,
      restaurantBranchId: null,
      roleId: null
    };

    return this.http.post(`${this.apiUrl}/register`, registerData);
  }

  login(username: string, password: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const loginData = {
        userName: username,
        password: password
      };
      this.getDatasOfThisUserWorker.postMessage({
        type: 'login',
        loginData
      });
  
      this.getDatasOfThisUserWorker.onmessage = ({ data }) => {
        if (data.loginResponse === null) {
          console.log("Login failed");
          resolve(false);
        } else {
          localStorage.setItem('access_token', data.loginResponse.access_token);
          localStorage.setItem('refresh_token', data.loginResponse.refresh_token);
          localStorage.setItem('user_login_name', data.loginResponse.user.lastName);
          this.setUserCache(data.loginResponse.user);
          console.log("Login success");
          resolve(true);
        }
      };
    });
  }
  


  loginWithGoogle(){

  }

  // AuthenticationService trong Angular
  refreshToken(refreshToken: string): Observable<any> {
    const tokenData = {
      refreshToken: refreshToken
    };

    return this.http.post(`${this.apiUrl}/refreshToken`, tokenData).pipe(
      map((response: any) => {
        // Lưu trữ JWT mới sau khi làm mới token vào Local Storage
        localStorage.setItem('jwtToken', response.accessToken);
        return response;
      })
    );
  }


  logout() {
    // Xóa token JWT khỏi Local Storage khi đăng xuất
    
    console.log("logout")
    localStorage.removeItem('jwtToken');
  }

  getToken(): string | null {
    // Lấy token JWT từ lưu trữ
    return localStorage.getItem('jwtToken');
  }

  getUserCache(): User | null {
    return this.userCache;
  }
}
