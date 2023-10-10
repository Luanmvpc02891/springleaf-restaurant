import { Table } from '../interfaces/table';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
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


}