import { Inventory } from './../interfaces/inventory';
import { Injectable } from '@angular/core';
import { Observable, Subject, of, tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
<<<<<<< HEAD
=======
import { Inventory } from '../interface/inventory';

>>>>>>> parent of 1ceda15 (fix name import interfaces)



@Injectable({
    providedIn: 'root'
})
export class InventoryService {

    private inventorysUrl = 'inventoris'; // URL to web api, không cần thêm base URL
    inventorisCache: Inventory[] | null = null; // Cache for categories
    private inventoryUrl = 'inventory';

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

    // Lấy sản phẩm theo ID
    getInventory(id: number): Observable<Inventory> {
        // Check if categoriesCache is null or empty
        if (!this.inventorisCache) {
            // Fetch the data from the API if cache is empty
            const url = `${this.inventoryUrl}/${id}`;
            return this.apiService.request<Inventory>('get', url);
        }

        // Try to find the Category in the cache by its id
        const InventoryFromCache = this.inventorisCache.find(Inventory => Inventory.inventoryId === id);

        if (InventoryFromCache) {
            // If found in cache, return it as an observable
            return of(InventoryFromCache);
        } else {
            // If not found in cache, fetch it from the API
            const url = `${this.inventoryUrl}/${id}`;
            return this.apiService.request<Inventory>('get', url);
        }
    }
    // Thêm sản phẩm mới
    addInventory(newInventory: Inventory): Observable<Inventory> {
        return this.apiService.request<Inventory>('post', this.inventoryUrl, newInventory);
    }

    // Cập nhật sản phẩm
    updateInventory(updatedInventory: Inventory): Observable<any> {
        const url = `${this.inventoryUrl}/${updatedInventory.inventoryId}`;
        return this.apiService.request('put', url, updatedInventory).pipe(
            tap(() => {
                // Cập nhật danh sách cache sau khi cập nhật danh mục
                const index = this.inventorisCache!.findIndex(cat => cat.inventoryId === updatedInventory.inventoryId);
                if (index !== -1) {
                    this.inventorisCache![index] = updatedInventory;
                }
            })
        );
    }
    updateInventoryCache(updatedInventory: Inventory): void {
        // Check if categoriesCache is null
        if (this.inventorisCache) {
            const index = this.inventorisCache.findIndex(cat => cat.inventoryId === updatedInventory.inventoryId);
            if (index !== -1) {
                this.inventorisCache[index] = updatedInventory;
            }
        }
    }
    // Xoá sản phẩm
    deleteInventory(inventoryId: number): Observable<any> {
        const url = `${this.inventoryUrl}/${inventoryId}`;
        return this.apiService.request('delete', url);
    }
}