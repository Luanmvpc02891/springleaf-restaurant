
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Inventory } from '../interfaces/inventory';




@Injectable({
    providedIn: 'root'
})
export class InventoryService {

    private inventorysUrl = 'inventoris'; // URL to web api, không cần thêm base URL
    inventorisCache: Inventory[] | null = null; // Cache for categories

    constructor(private apiService: ApiService) { } // Inject ApiService

    // Sử dụng ApiService để gửi yêu cầu GET
    getInventoris(): Observable<Inventory[]> {
        // Kiểm tra nếu có dữ liệu trong cache, trả về dữ liệu đó
        if (this.inventorisCache) {
            console.log("Có Inventorys cache");
            return of(this.inventorisCache);
        }

        const inventorisObservable = this.apiService.request<Inventory[]>('get', this.inventorysUrl);

        // Cache the categories observable
        inventorisObservable.subscribe(data => {
            this.inventorisCache = data; // Store the fetched data in the cache
        });

        return inventorisObservable;
    }



}