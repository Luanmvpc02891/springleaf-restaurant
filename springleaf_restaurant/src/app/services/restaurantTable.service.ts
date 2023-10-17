import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { RestaurantTable } from '../interfaces/restaurantTable';


@Injectable({
    providedIn: 'root'
})
export class RestaurantTableService {

    private restaurantTablesUrl = 'restaurantTables'; // URL to web api, không cần thêm base URL
    restaurantTablesCache: RestaurantTable[] | null = null; // Cache for categories
    private restaurantTableUrl = 'restaurantTable';
    constructor(private apiService: ApiService) { } // Inject ApiService

    // Sử dụng ApiService để gửi yêu cầu GET
    getTables(): Observable<RestaurantTable[]> {
        // Kiểm tra nếu có dữ liệu trong cache, trả về dữ liệu đó
        if (this.restaurantTablesCache) {
            return of(this.restaurantTablesCache);
        }

        const tablesObservable = this.apiService.request<RestaurantTable[]>('get', this.restaurantTablesUrl);

        // Cache the categories observable
        tablesObservable.subscribe(data => {
            this.restaurantTablesCache = data; // Store the fetched data in the cache
        });

        return tablesObservable;
    }
    addTable(newTable: RestaurantTable): Observable<RestaurantTable> {
        return this.apiService.request<RestaurantTable>('post', this.restaurantTableUrl, newTable).pipe(
            map(addTable => {
                // Sau khi thêm thành công, cập nhật cache bằng cách thêm sản phẩm mới vào mảng inventoriesCache
                if (this.restaurantTablesCache) {
                    this.restaurantTablesCache.push(addTable);
                }
                return addTable;
            })
        );
    }
    deleteTable(id: number): Observable<any> {
        const url = `${this.restaurantTableUrl}/${id}`;
        return this.apiService.request('delete', url);
    }

    // Cập nhật bàn
    updateTable(updatedTable: RestaurantTable): Observable<any> {
        const url = `${this.restaurantTableUrl}/${updatedTable.tableId}`;
        return this.apiService.request('put', url, updatedTable).pipe(
            tap(() => {
                // Cập nhật danh sách cache sau khi cập nhật danh mục
                const index = this.restaurantTablesCache!.findIndex(cat => cat.tableId === updatedTable.tableId);
                if (index !== -1) {
                    this.restaurantTablesCache![index] = updatedTable;
                }
            })
        );
    }
    updateTableCache(updatedTable: RestaurantTable): void {
        // Check if categoriesCache is null
        if (this.restaurantTablesCache) {
            const index = this.restaurantTablesCache.findIndex(cat => cat.tableId === updatedTable.tableId);
            if (index !== -1) {
                this.restaurantTablesCache[index] = updatedTable;
            }
        }
    }

    // Lấy tên theo ID
    getTable(id: number): Observable<RestaurantTable> {
        // Check if categoriesCache is null or empty
        if (!this.restaurantTablesCache) {
            // Fetch the data from the API if cache is empty
            const url = `${this.restaurantTableUrl}/${id}`;
            return this.apiService.request<RestaurantTable>('get', url);
        }

        // Try to find the Category in the cache by its id
        const TableFromCache = this.restaurantTablesCache.find(Table => Table.tableId === id);

        if (TableFromCache) {
            // If found in cache, return it as an observable
            return of(TableFromCache);
        } else {
            // If not found in cache, fetch it from the API
            const url = `${this.restaurantTableUrl}/${id}`;
            return this.apiService.request<RestaurantTable>('get', url);
        }
    }
}