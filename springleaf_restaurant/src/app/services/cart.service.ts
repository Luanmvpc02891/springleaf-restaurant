import { Cart } from '../interfaces/cart';
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
    getCarts(): Observable<Cart[]> {
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
    // Lấy tên theo ID
    getCart(id: number): Observable<Cart> {
        // Check if categoriesCache is null or empty
        if (!this.cartsCache) {
            // Fetch the data from the API if cache is empty
            const url = `${this.cartsUrl}/${id}`;
            return this.apiService.request<Cart>('get', url);
        }

        // Try to find the Category in the cache by its id
        const CartFromCache = this.cartsCache.find(Cart => Cart.orderId === id);

        if (CartFromCache) {
            // If found in cache, return it as an observable
            return of(CartFromCache);
        } else {
            // If not found in cache, fetch it from the API
            const url = `${this.cartsUrl}/${id}`;
            return this.apiService.request<Cart>('get', url);
        }
    }


}