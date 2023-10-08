import { HttpClient } from '@angular/common/http';
import { Inventory } from 'src/app/interfaces/inventory';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
    providedIn: 'root'
})
export class InventoryService {

    private inventoriesUrl = 'inventories';
    private inventoryUrl = 'inventory';
    inventoriesCache: Inventory[] | null = null;

    constructor(private apiService: ApiService, private httpClient: HttpClient) { }

    // Sử dụng ApiService để gửi yêu cầu GET
    getInventories(): Observable<Inventory[]> {
        // Kiểm tra nếu có dữ liệu trong cache, trả về dữ liệu đó
        if (this.inventoriesCache) {
            console.log("Có categories cache");
            return of(this.inventoriesCache);
        }

        console.log("Không có categories cache")
        const categoriesObservable = this.apiService.request<Inventory[]>('get', this.inventoriesUrl);

        // Cache the categories observable
        categoriesObservable.subscribe(data => {
            this.inventoriesCache = data; // Store the fetched data in the cache
        });

        return categoriesObservable;
    }

    addInventory(newInventory: Inventory): Observable<Inventory> {
        return this.apiService.request<Inventory>('post', this.inventoryUrl, newInventory).pipe(
            map(addedInventory => {
                // Sau khi thêm thành công, cập nhật cache bằng cách thêm sản phẩm mới vào mảng inventoriesCache
                if (this.inventoriesCache) {
                    this.inventoriesCache.push(addedInventory);
                }
                return addedInventory;
            })
        );
    }
    updateInventoryCache(inventories: Inventory[]): void {
        this.inventoriesCache = inventories;
    }

    deleteInventory(id: number): Observable<any> {
        const url = `${this.inventoryUrl}/${id}`;
        return this.apiService.request('delete', url);
    }
}
