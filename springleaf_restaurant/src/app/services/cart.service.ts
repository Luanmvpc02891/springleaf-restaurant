import { Cart } from '../interface/cart';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';


@Injectable({
    providedIn: 'root'
})
export class CartService {

    private cartsUrl = 'carts'; // URL to web api, không cần thêm base URL
    cartsCache: Cart[] | null = null; // Cache for categories

    constructor(private apiService: ApiService) { } // Inject ApiService

    // Sử dụng ApiService để gửi yêu cầu GET
    getCartDetails(): Observable<Cart[]> {
        // Kiểm tra nếu có dữ liệu trong cache, trả về dữ liệu đó
        if (this.cartsCache) {
            return of(this.cartsCache);
        }

        const cartsObservable = this.apiService.request<Cart[]>('get', this.cartsUrl);

        // Cache the categories observable
        cartsObservable.subscribe(data => {
            this.cartsCache = data; // Store the fetched data in the cache
        });

        return cartsObservable;
    }



}