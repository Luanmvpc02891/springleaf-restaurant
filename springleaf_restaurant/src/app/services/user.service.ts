import { User } from '../interfaces/user';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';



@Injectable({
    providedIn: 'root'
})
export class UserService {

    private usersUrl = 'users'; // URL to web api, không cần thêm base URL
    private userUrl = 'user';
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

    // Lấy tên theo ID
    getUser(id: number): Observable<User> {
        // Check if categoriesCache is null or empty
        if (!this.usersCache) {
            // Fetch the data from the API if cache is empty
            const url = `${this.usersUrl}/${id}`;
            return this.apiService.request<User>('get', url);
        }

        // Try to find the Category in the cache by its id
        const UserFromCache = this.usersCache.find(User => User.userId === id);

        if (UserFromCache) {
            // If found in cache, return it as an observable
            return of(UserFromCache);
        } else {
            // If not found in cache, fetch it from the API
            const url = `${this.usersUrl}/${id}`;
            return this.apiService.request<User>('get', url);
        }
    }

}