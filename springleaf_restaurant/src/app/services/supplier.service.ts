import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Supplier } from '../interfaces/supplier';


@Injectable({
    providedIn: 'root'
})
export class SupplierService {

    private suppliersUrl = 'suppliers'; // URL to web api, không cần thêm base URL
    suppliersCache: Supplier[] | null = null; // Cache for categories
    private supplierUrl = 'supplier';
    constructor(private apiService: ApiService) { } // Inject ApiService

    // Sử dụng ApiService để gửi yêu cầu GET
    getSuppliers(): Observable<Supplier[]> {
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
    // Lấy tên theo ID
    getSupplier(id: number): Observable<Supplier> {
        // Check if categoriesCache is null or empty
        if (!this.suppliersCache) {
            // Fetch the data from the API if cache is empty
            const url = `${this.supplierUrl}/${id}`;
            return this.apiService.request<Supplier>('get', url);
        }

        // Try to find the Category in the cache by its id
        const SupplierFromCache = this.suppliersCache.find(Supplier => Supplier.supplierId === id);

        if (SupplierFromCache) {
            // If found in cache, return it as an observable
            return of(SupplierFromCache);
        } else {
            // If not found in cache, fetch it from the API
            const url = `${this.supplierUrl}/${id}`;
            return this.apiService.request<Supplier>('get', url);
        }
    }


}