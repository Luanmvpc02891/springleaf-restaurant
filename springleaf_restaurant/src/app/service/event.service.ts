
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { Event } from '../interface/event';


@Injectable({
    providedIn: 'root'
})
export class EventService {

    private evensUrl = 'events'; // URL to web api, không cần thêm base URL
    evensCache: Event[] | null = null; // Cache for categories

    constructor(private apiService: ApiService) { } // Inject ApiService

    // Sử dụng ApiService để gửi yêu cầu GET
    getEvens(): Observable<Event[]> {
        // Kiểm tra nếu có dữ liệu trong cache, trả về dữ liệu đó
        if (this.evensCache) {
            return of(this.evensCache);
        }

        const evensObservable = this.apiService.request<Event[]>('get', this.evensUrl);

        // Cache the categories observable
        evensObservable.subscribe(data => {
            this.evensCache = data; // Store the fetched data in the cache
        });

        return evensObservable;
    }



}