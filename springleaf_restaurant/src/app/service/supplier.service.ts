import { Supplier } from '../interface/supplier';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';


@Injectable({
    providedIn: 'root'
})
export class SupplierService {

    private suppliersUrl = 'suppliers'; // URL to web api, không cần thêm base URL
    suppliersCache: Supplier[] | null = null; // Cache for categories

    constructor(private apiService: ApiService) { } // Inject ApiService

    // Sử dụng ApiService để gửi yêu cầu GET
    getSupplier(): Observable<Supplier[]> {
        // Kiểm tra nếu có dữ liệu trong cache, trả về dữ liệu đó
        if (this.suppliersCache) {
            return of(this.suppliersCache);
        }

        const suppliersObservable = this.apiService.request<Supplier[]>('get', this.suppliersUrl);

        // Cache the categories observable
        suppliersObservable.subscribe(data => {
            this.suppliersCache = data; // Store the fetched data in the cache
        });

        return suppliersObservable;
    }



}