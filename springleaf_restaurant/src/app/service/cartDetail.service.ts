import { CartDetail } from '../interface/cartDetail';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';


@Injectable({
    providedIn: 'root'
})
export class CartService {

    private cartsUrl = 'cartDetails'; // URL to web api, không cần thêm base URL
    cartsCache: CartDetail[] | null = null; // Cache for categories

    constructor(private apiService: ApiService) { } // Inject ApiService

    // Sử dụng ApiService để gửi yêu cầu GET
    getCarts(): Observable<CartDetail[]> {
        // Kiểm tra nếu có dữ liệu trong cache, trả về dữ liệu đó
        if (this.cartsCache) {
            return of(this.cartsCache);
        }

        const cartsObservable = this.apiService.request<CartDetail[]>('get', this.cartsUrl);

        // Cache the categories observable
        cartsObservable.subscribe(data => {
            this.cartsCache = data; // Store the fetched data in the cache
        });

        return cartsObservable;
    }



}