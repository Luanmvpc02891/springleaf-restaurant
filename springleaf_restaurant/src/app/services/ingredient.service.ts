
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Ingredient } from '../interfaces/ingredient';


@Injectable({
    providedIn: 'root'
})
export class IngredientService {

    private ingredientsUrl = 'ingredients'; // URL to web api, không cần thêm base URL
    private ingredientUrl = 'ingredients';
    ingredientsCache: Ingredient[] | null = null; // Cache for categories

    constructor(private apiService: ApiService) { } // Inject ApiService

    // Sử dụng ApiService để gửi yêu cầu GET
    getIngredients(): Observable<Ingredient[]> {
        // Kiểm tra nếu có dữ liệu trong cache, trả về dữ liệu đó
        if (this.ingredientsCache) {
            console.log("Có ingredients cache");
            return of(this.ingredientsCache);
        }

        const ingredientsObservable = this.apiService.request<Ingredient[]>('get', this.ingredientsUrl);

        // Cache the categories observable
        ingredientsObservable.subscribe(data => {
            this.ingredientsCache = data; // Store the fetched data in the cache
        });

        return ingredientsObservable;
    }

    // Lấy sản phẩm theo ID
    getIngredient(id: number): Observable<Ingredient> {
        // Check if categoriesCache is null or empty
        if (!this.ingredientsCache) {
            // Fetch the data from the API if cache is empty
            const url = `${this.ingredientUrl}/${id}`;
            return this.apiService.request<Ingredient>('get', url);
        }

        // Try to find the Category in the cache by its id
        const CategoryFromCache = this.ingredientsCache.find(Ingredient => Ingredient.ingredientId === id);

        if (CategoryFromCache) {
            // If found in cache, return it as an observable
            return of(CategoryFromCache);
        } else {
            // If not found in cache, fetch it from the API
            const url = `${this.ingredientUrl}/${id}`;
            return this.apiService.request<Ingredient>('get', url);
        }
    }

}