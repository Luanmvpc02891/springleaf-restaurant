import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { Product } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'categories'; // URL to web api, không cần thêm base URL
  private productsCache: Product[] | null = null; // Cache for products

  constructor(private apiService: ApiService) { } // Inject ApiService

  // Sử dụng ApiService để gửi yêu cầu GET
  getProducts(): Observable<Product[]> {
    // Kiểm tra nếu có dữ liệu trong cache, trả về dữ liệu đó
    if (this.productsCache) {
      return of(this.productsCache);
    }

    const productsObservable = this.apiService.request<Product[]>('get', this.productsUrl);

    // Cache the products observable
    productsObservable.subscribe(data => {
      this.productsCache = data; // Store the fetched data in the cache
    });

    return productsObservable;
  }

  // Lấy sản phẩm theo ID
  getProduct(id: number): Observable<Product> {
    // Check if productsCache is null or empty
    if (!this.productsCache) {
      // Fetch the data from the API if cache is empty
      const url = `${this.productsUrl}/${id}`;
      return this.apiService.request<Product>('get', url);
    }

    // Try to find the product in the cache by its id
    const productFromCache = this.productsCache.find(product => product.categoryId === id);

    if (productFromCache) {
      // If found in cache, return it as an observable
      return of(productFromCache);
    } else {
      // If not found in cache, fetch it from the API
      const url = `${this.productsUrl}/${id}`;
      return this.apiService.request<Product>('get', url);
    }
  }

  // Thêm sản phẩm mới
  addProduct(newProduct: Product): Observable<Product> {
    return this.apiService.request<Product>('post', this.productsUrl, newProduct);
  }

  // Cập nhật sản phẩm
  updateProduct(updatedProduct: Product): Observable<any> {
    const url = `${this.productsUrl}/${updatedProduct.categoryId}`;
    return this.apiService.request('put', url, updatedProduct);
  }

  // Xoá sản phẩm
  deleteProduct(id: number): Observable<any> {
    const url = `${this.productsUrl}/${id}`;
    return this.apiService.request('delete', url);
  }

  // Tìm kiếm sản phẩm
  searchProducts(term: string): Observable<Product[]> {
    const url = `${this.productsUrl}/?name=${term}`;
    return this.apiService.request<Product[]>('get', url);
  }
}