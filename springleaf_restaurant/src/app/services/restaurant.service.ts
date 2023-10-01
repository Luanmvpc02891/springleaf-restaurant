import { Restaurant } from '../interfaces/restaurant';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';


@Injectable({
    providedIn: 'root'
})
export class RestaurantService {

    private restaurantUrl = 'restaurants'; // URL to web api, không cần thêm base URL
    restaurantsCache: Restaurant[] | null = null; // Cache for categories

    constructor(private apiService: ApiService) { } // Inject ApiService

    // Sử dụng ApiService để gửi yêu cầu GET
    getRestaurants(): Observable<Restaurant[]> {
        // Kiểm tra nếu có dữ liệu trong cache, trả về dữ liệu đó
        if (this.restaurantsCache) {
            return of(this.restaurantsCache);
        }

        const restaurantsObservable = this.apiService.request<Restaurant[]>('get', this.restaurantUrl);

        // Cache the categories observable
        restaurantsObservable.subscribe(data => {
            this.restaurantsCache = data; // Store the fetched data in the cache
        });

        return restaurantsObservable;
    }



}