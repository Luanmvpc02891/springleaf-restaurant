import { InventoryBranch } from './../interface/inventory-branch';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';




@Injectable({
    providedIn: 'root'
})
export class InventoryBranchService {

    private inventoryBranchsUrl = 'inventoryBranches'; // URL to web api, không cần thêm base URL
    inventoryBranchsCache: InventoryBranch[] | null = null; // Cache for categories

    constructor(private apiService: ApiService) { } // Inject ApiService

    // Sử dụng ApiService để gửi yêu cầu GET
    getInventoryBranchs(): Observable<InventoryBranch[]> {
        // Kiểm tra nếu có dữ liệu trong cache, trả về dữ liệu đó
        if (this.inventoryBranchsCache) {
            console.log("Có Inventorys cache");
            return of(this.inventoryBranchsCache);
        }

        const inventoryBranchsObservable = this.apiService.request<InventoryBranch[]>('get', this.inventoryBranchsUrl);

        // Cache the categories observable
        inventoryBranchsObservable.subscribe(data => {
            this.inventoryBranchsCache = data; // Store the fetched data in the cache
        });

        return inventoryBranchsObservable;
    }



}