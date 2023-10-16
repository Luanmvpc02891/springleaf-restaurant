import { User } from '../interfaces/user';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';



@Injectable({
    providedIn: 'root'
})
export class UserService {

    private usersUrl = 'users'; // URL to web api, không cần thêm base URL
    usersCache: User[] | null = null; // Cache for categories

    constructor(private apiService: ApiService) { } // Inject ApiService

    // Sử dụng ApiService để gửi yêu cầu GET
    getUsers(): Observable<User[]> {
        // Kiểm tra nếu có dữ liệu trong cache, trả về dữ liệu đó
        if (this.usersCache) {
            return of(this.usersCache);
        }

        const usersObservable = this.apiService.request<User[]>('get', this.usersUrl);

        // Cache the categories observable
        usersObservable.subscribe(data => {
            this.usersCache = data; // Store the fetched data in the cache
        });

        return usersObservable;
    }



}