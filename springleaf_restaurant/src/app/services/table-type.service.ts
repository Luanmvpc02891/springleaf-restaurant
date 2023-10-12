import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { TableType } from '../interfaces/table-type';


@Injectable({
  providedIn: 'root'
})
export class TableTypeService {

  private tableTypesUrl = 'tableTypes'; // URL to web api, không cần thêm base URL
  tableTypesCache: TableType[] | null = null; // Cache for categories
  private tableTypeUrl = 'tableType';
  constructor(private apiService: ApiService) { } // Inject ApiService

  // Sử dụng ApiService để gửi yêu cầu GET
  getTableTypes(): Observable<TableType[]> {
    // Kiểm tra nếu có dữ liệu trong cache, trả về dữ liệu đó
    if (this.tableTypesCache) {
      return of(this.tableTypesCache);
    }

    const tableTypesObservable = this.apiService.request<TableType[]>('get', this.tableTypesUrl);

    // Cache the categories observable
    tableTypesObservable.subscribe(data => {
      this.tableTypesCache = data; // Store the fetched data in the cache
    });

    return tableTypesObservable;
  }
  // Lấy tên theo ID
  getTableType(id: number): Observable<TableType> {
    // Check if categoriesCache is null or empty
    if (!this.tableTypesCache) {
      // Fetch the data from the API if cache is empty
      const url = `${this.tableTypeUrl}/${id}`;
      return this.apiService.request<TableType>('get', url);
    }

    // Try to find the Category in the cache by its id
    const TableTypeFromCache = this.tableTypesCache.find(TableType => TableType.tableTypeId === id);

    if (TableTypeFromCache) {
      // If found in cache, return it as an observable
      return of(TableTypeFromCache);
    } else {
      // If not found in cache, fetch it from the API
      const url = `${this.tableTypeUrl}/${id}`;
      return this.apiService.request<TableType>('get', url);
    }
  }


}