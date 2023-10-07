import { Inventory } from 'src/app/interfaces/inventory';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';


@Injectable({
    providedIn: 'root'
})
export class InventoryService {

    private inventorysUrl = 'inventoris'; // URL to web api, không cần thêm base URL
    private inventoryUrl = 'inventory'
    inventorisCache: Inventory[] | null = null; // Cache for categories

    constructor(private apiService: ApiService) { }

    // Sử dụng ApiService để gửi yêu cầu GET
    getInventoris(): Observable<Inventory[]> {
        // Kiểm tra nếu có dữ liệu trong cache, trả về dữ liệu đó
        if (this.inventorisCache) {
            console.log("Có Inventorys cache");
            return of(this.inventorisCache);
        }

        const inventorisObservable = this.apiService.request<any[]>('get', this.inventorysUrl);

        // Chuyển đổi dữ liệu từ response API thành kiểu Inventory
        inventorisObservable.subscribe(data => {
            this.inventorisCache = data.map(item => ({
                inventoryId: item[0],
                ingredientId: item[1],
                supplierId: item[2]
            }));
        });

        return inventorisObservable;
    }

    // Thêm sản phẩm mới
    addInventory(newInventory: Inventory): Observable<Inventory> {
        return this.apiService.request<Inventory>('post', this.inventoryUrl, newInventory);
    }
}
