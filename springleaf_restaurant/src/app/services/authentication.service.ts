import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:8080/api/v1/auth'; // Thay thế bằng URL của Spring Boot API
  private userCache: User | null = null;
  private cachedDataSubject = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {}

  // Đây là một observable để theo dõi sự thay đổi trong userCache
  cachedData$: Observable<User | null> = this.cachedDataSubject.asObservable();

  setUserCache(user: User | null) {
    this.userCache = user;
    this.cachedDataSubject.next(user); // Thông báo cho bất kỳ thành phần nào đang theo dõi userCache
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

  login(username: string, password: string): Observable<any> {
    const loginData = {
      userName: username,
      password: password
    };
  
    return this.http.post(`${this.apiUrl}/authenticate`, loginData).pipe(
      map((response: any) => {
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('refresh_token', response.refresh_token);
        console.log(response)
        return response;
      })
    );
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
