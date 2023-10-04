import { RestaurantTable } from './../interfaces/restaurant-table';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';



@Injectable({
    providedIn: 'root'
})
export class RestaurantTableService {

    private restaurantTablesUrl = 'restaurantTables'; // URL to web api, không cần thêm base URL
    restaurantTablesCache: RestaurantTable[] | null = null; // Cache for categories

    constructor(private apiService: ApiService) { } // Inject ApiService

    // Sử dụng ApiService để gửi yêu cầu GET
    getRestaurantTables(): Observable<RestaurantTable[]> {
        // Kiểm tra nếu có dữ liệu trong cache, trả về dữ liệu đó
        if (this.restaurantTablesCache) {
            return of(this.restaurantTablesCache);
        }

        const restaurantTablesObservable = this.apiService.request<RestaurantTable[]>('get', this.restaurantTablesUrl);

        // Cache the categories observable
        restaurantTablesObservable.subscribe(data => {
            this.restaurantTablesCache = data; // Store the fetched data in the cache
        });

        return restaurantTablesObservable;
    }



}