
import { Inventory } from 'src/app/interfaces/inventory';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
    providedIn: 'root'
})
export class InventoryService {

    private inventoriesUrl = 'inventories';
    private inventoryUrl = 'inventory';
    inventoriesCache: Inventory[] | null = null;

    constructor(private apiService: ApiService) { }

    // Sử dụng ApiService để gửi yêu cầu GET
    getInventories(): Observable<Inventory[]> {
        // Kiểm tra nếu có dữ liệu trong cache, trả về dữ liệu đó
        if (this.inventoriesCache) {
            console.log("Có inventories cache");
            return of(this.inventoriesCache);
        }

        console.log("Không có categories cache")
        const inventoriesObservable = this.apiService.request<Inventory[]>('get', this.inventoriesUrl);

        // Cache the categories observable
        inventoriesObservable.subscribe(data => {
            this.inventoriesCache = data; // Store the fetched data in the cache
        });

        return inventoriesObservable;
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
    // Cập nhật sản phẩm

    updateInventory(updatedInventory: Inventory): Observable<any> {
        const url = `${this.inventoryUrl}/${updatedInventory.inventoryId}`;
        return this.apiService.request('put', url, updatedInventory).pipe(
            tap(() => {
                // Cập nhật danh sách cache sau khi cập nhật danh mục
                const index = this.inventoriesCache!.findIndex(cat => cat.inventoryId === updatedInventory.inventoryId);
                if (index !== -1) {
                    this.inventoriesCache![index] = updatedInventory;
                }
            })
        );
    }


    //cập nhật cache
    updatedInventoryCache(updatedInventory: Inventory): void {
        // Check if categoriesCache is null
        if (this.inventoriesCache) {
            const index = this.inventoriesCache.findIndex(cat => cat.inventoryId === updatedInventory.inventoryId);
            if (index !== -1) {
                this.inventoriesCache[index] = updatedInventory;
            }
        }
    }

    deleteInventory(id: number): Observable<any> {
        const url = `${this.inventoryUrl}/${id}`;
        return this.apiService.request('delete', url);
    }
}
