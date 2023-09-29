import { Table } from '../interface/table';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';


@Injectable({
    providedIn: 'root'
})
export class TableService {

    private tablesUrl = 'restaurantTable'; // URL to web api, không cần thêm base URL
    tablesCache: Table[] | null = null; // Cache for categories

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



}