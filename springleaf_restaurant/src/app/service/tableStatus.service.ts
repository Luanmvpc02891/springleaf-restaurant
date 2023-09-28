import { TableStatus } from './../interface/tableStatus';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';



@Injectable({
    providedIn: 'root'
})
export class TableStatusService {

    private tableStatusUrl = 'tableStatuss'; // URL to web api, không cần thêm base URL
    tableStatusCache: TableStatus[] | null = null; // Cache for categories

    constructor(private apiService: ApiService) { } // Inject ApiService

    // Sử dụng ApiService để gửi yêu cầu GET
    getTableStuss(): Observable<TableStatus[]> {
        // Kiểm tra nếu có dữ liệu trong cache, trả về dữ liệu đó
        if (this.tableStatusCache) {
            return of(this.tableStatusCache);
        }

        const combosObservable = this.apiService.request<TableStatus[]>('get', this.tableStatusUrl);

        // Cache the categories observable
        combosObservable.subscribe(data => {
            this.tableStatusCache = data; // Store the fetched data in the cache
        });

        return combosObservable;
    }



}