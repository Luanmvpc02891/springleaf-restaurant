import { Table } from '../interfaces/table';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';


@Injectable({
    providedIn: 'root'
})
export class TableService {

    private tablesUrl = 'restaurantTables'; // URL to web api, không cần thêm base URL
    tablesCache: Table[] | null = null; // Cache for categories
    private tableUrl = 'restaurantTable'
    constructor(private apiService: ApiService) { } // Inject ApiService

    // Sử dụng ApiService để gửi yêu cầu GET
    getTables(): Observable<Table[]> {
        // Kiểm tra nếu có dữ liệu trong cache, trả về dữ liệu đó
        if (this.tablesCache) {
            return of(this.tablesCache);
        }

        const tablesObservable = this.apiService.request<Table[]>('get', this.tablesUrl);

        // Cache the categories observable
        tablesObservable.subscribe(data => {
            this.tablesCache = data; // Store the fetched data in the cache
        });

        return tablesObservable;
    }
    addTable(newTable: Table): Observable<Table> {
        return this.apiService.request<Table>('post', this.tableUrl, newTable).pipe(
            map(addTable => {
                // Sau khi thêm thành công, cập nhật cache bằng cách thêm sản phẩm mới vào mảng inventoriesCache
                if (this.tablesCache) {
                    this.tablesCache.push(addTable);
                }
                return addTable;
            })
        );
    }
    deleteTable(id: number): Observable<any> {
        const url = `${this.tableUrl}/${id}`;
        return this.apiService.request('delete', url);
    }

    // Cập nhật bàn
    updateTable(updatedTable: Table): Observable<any> {
        const url = `${this.tableUrl}/${updatedTable.tableId}`;
        return this.apiService.request('put', url, updatedTable).pipe(
            tap(() => {
                // Cập nhật danh sách cache sau khi cập nhật danh mục
                const index = this.tablesCache!.findIndex(cat => cat.tableId === updatedTable.tableId);
                if (index !== -1) {
                    this.tablesCache![index] = updatedTable;
                }
            })
        );
    }
    updateTableCache(updatedTable: Table): void {
        // Check if categoriesCache is null
        if (this.tablesCache) {
            const index = this.tablesCache.findIndex(cat => cat.tableId === updatedTable.tableId);
            if (index !== -1) {
                this.tablesCache[index] = updatedTable;
            }
        }
    }

    // Lấy tên theo ID
    getTable(id: number): Observable<Table> {
        // Check if categoriesCache is null or empty
        if (!this.tablesCache) {
            // Fetch the data from the API if cache is empty
            const url = `${this.tablesUrl}/${id}`;
            return this.apiService.request<Table>('get', url);
        }

        // Try to find the Category in the cache by its id
        const TableFromCache = this.tablesCache.find(Table => Table.tableId === id);

        if (TableFromCache) {
            // If found in cache, return it as an observable
            return of(TableFromCache);
        } else {
            // If not found in cache, fetch it from the API
            const url = `${this.tablesUrl}/${id}`;
            return this.apiService.request<Table>('get', url);
        }
    }
}