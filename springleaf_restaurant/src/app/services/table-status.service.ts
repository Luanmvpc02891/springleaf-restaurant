import { TableStatus } from '../interfaces/table-status';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';



@Injectable({
    providedIn: 'root'
})
export class TableStatusService {

    private tableStatusesUrl = 'tableStatuses'; // URL to web api, không cần thêm base URL
    tableStatusesCache: TableStatus[] | null = null; // Cache for categories
    private tableStatusUrl = 'tableStatus';
    constructor(private apiService: ApiService) { } // Inject ApiService

    // Sử dụng ApiService để gửi yêu cầu GET
    getTableStatuss(): Observable<TableStatus[]> {
        // Kiểm tra nếu có dữ liệu trong cache, trả về dữ liệu đó
        if (this.tableStatusesCache) {
            return of(this.tableStatusesCache);
        }

        const combosObservable = this.apiService.request<TableStatus[]>('get', this.tableStatusesUrl);

        // Cache the categories observable
        combosObservable.subscribe(data => {
            this.tableStatusesCache = data; // Store the fetched data in the cache
        });

        return combosObservable;
    }

    // Lấy tên theo ID
    getTableStatus(id: number): Observable<TableStatus> {
        // Check if categoriesCache is null or empty
        if (!this.tableStatusesCache) {
            // Fetch the data from the API if cache is empty
            const url = `${this.tableStatusUrl}/${id}`;
            return this.apiService.request<TableStatus>('get', url);
        }

        // Try to find the Category in the cache by its id
        const TableStatusFromCache = this.tableStatusesCache.find(TableStatus => TableStatus.tableStatusId === id);

        if (TableStatusFromCache) {
            // If found in cache, return it as an observable
            return of(TableStatusFromCache);
        } else {
            // If not found in cache, fetch it from the API
            const url = `${this.tableStatusUrl}/${id}`;
            return this.apiService.request<TableStatus>('get', url);
        }
    }

}