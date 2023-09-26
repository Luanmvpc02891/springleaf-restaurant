import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { Category } from '../interface/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoriesUrl = 'categories'; // URL to web api, không cần thêm base URL
  categoriesCache: Category[] | null = null; // Cache for categories

  constructor(private apiService: ApiService) { } // Inject ApiService

  // Sử dụng ApiService để gửi yêu cầu GET
  getCategories(): Observable<Category[]> {
    // Kiểm tra nếu có dữ liệu trong cache, trả về dữ liệu đó
    if (this.categoriesCache) {
      return of(this.categoriesCache);
    }

    const categoriesObservable = this.apiService.request<Category[]>('get', this.categoriesUrl);

    // Cache the categories observable
    categoriesObservable.subscribe(data => {
      this.categoriesCache = data; // Store the fetched data in the cache
    });

    return categoriesObservable;
  }

  // Lấy sản phẩm theo ID
  getCategory(id: number): Observable<Category> {
    // Check if categoriesCache is null or empty
    if (!this.categoriesCache) {
      // Fetch the data from the API if cache is empty
      const url = `${this.categoriesUrl}/${id}`;
      return this.apiService.request<Category>('get', url);
    }

    // Try to find the Category in the cache by its id
    const CategoryFromCache = this.categoriesCache.find(Category => Category.categoryId === id);

    if (CategoryFromCache) {
      // If found in cache, return it as an observable
      return of(CategoryFromCache);
    } else {
      // If not found in cache, fetch it from the API
      const url = `${this.categoriesUrl}/${id}`;
      return this.apiService.request<Category>('get', url);
    }
  }

  // Thêm sản phẩm mới
  addCategory(newCategory: Category): Observable<Category> {
    return this.apiService.request<Category>('post', this.categoriesUrl, newCategory);
  }

  // Cập nhật sản phẩm
  updateCategory(updatedCategory: Category): Observable<any> {
    const url = `${this.categoriesUrl}/${updatedCategory.categoryId}`;
    return this.apiService.request('put', url, updatedCategory);
  }

  // Xoá sản phẩm
  deleteCategory(id: number): Observable<any> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.apiService.request('delete', url);
  }

  // Tìm kiếm sản phẩm
  searchCategories(term: string): Observable<Category[]> {
    const url = `${this.categoriesUrl}/?name=${term}`;
    return this.apiService.request<Category[]>('get', url);
  }



}