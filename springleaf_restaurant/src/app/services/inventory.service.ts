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

    getInventories(): Observable<Inventory[]> {
        if (this.inventoriesCache !== null) {
            console.log('Có Inventories cache');
            return of(this.inventoriesCache);
        }

        console.log('Không có Inventories cache');

        return this.apiService.request<any[]>('get', this.inventoriesUrl).pipe(
            map(data => {
                if (data === null) {
                    // Xử lý trường hợp API trả về null, hoặc bạn có thể trả về một mảng rỗng tùy vào yêu cầu của ứng dụng
                    return [];
                }
                // Chuyển đổi dữ liệu từ API thành đối tượng Inventory
                this.inventoriesCache = data.map(item => {
                    return {
                        inventoryId: item[0],  // Thay 'id' bằng 'inventoryId' nếu dữ liệu từ API sử dụng 'inventoryId'
                        ingredientId: item[1], // Thay 'name' bằng 'ingredientId' nếu dữ liệu từ API sử dụng 'ingredientId'
                        supplierId: item[2]     // Thay 'supplier' bằng 'supplierId' nếu dữ liệu từ API sử dụng 'supplierId'
                    };
                });
                return this.inventoriesCache;
            })
        );
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
