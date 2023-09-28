
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { Combo } from '../interface/combo';


@Injectable({
    providedIn: 'root'
})
export class ComboService {

    private combosUrl = 'combos'; // URL to web api, không cần thêm base URL
    combosCache: Combo[] | null = null; // Cache for categories

    constructor(private apiService: ApiService) { } // Inject ApiService

    // Sử dụng ApiService để gửi yêu cầu GET
    getCombos(): Observable<Combo[]> {
        // Kiểm tra nếu có dữ liệu trong cache, trả về dữ liệu đó
        if (this.combosCache) {
            return of(this.combosCache);
        }

        const combosObservable = this.apiService.request<Combo[]>('get', this.combosUrl);

        // Cache the categories observable
        combosObservable.subscribe(data => {
            this.combosCache = data; // Store the fetched data in the cache
        });

        return combosObservable;
    }



}