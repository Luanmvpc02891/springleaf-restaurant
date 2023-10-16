import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { Product } from '../interfaces/product';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'products'; // URL to web api, không cần thêm base URL
  private categoryUrl = 'category';
  private productUrl = 'product';
  productsCache: Product[] | null = null; // Cache for products

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

    // Try to find the Product in the cache by its id
    const productFromCache = this.productsCache.find(Product => Product.menuItemId === id);

    if (productFromCache) {
      // If found in cache, return it as an observable
      return of(productFromCache);
    } else {
      // If not found in cache, fetch it from the API
      const url = `${this.productsUrl}/${id}`;
      return this.apiService.request<Product>('get', url);
    }
  }

  // category to product
  getProductsByCategoryId(categoryId: number): Observable<Product[]> {
    if (this.productsCache) {
      const products = this.productsCache.filter(product => product.categoryId === categoryId);
      return of(products);
    }

    const url = `${this.categoryUrl}/${categoryId}/products`;
    return this.apiService.request<Product[]>('get', url);
  }

  addProduct(newProduct: Product): Observable<Product> {
    return this.apiService.request<Product>('post', this.productUrl, newProduct).pipe(
      map(addProduct => {
        // Sau khi thêm thành công, cập nhật cache bằng cách thêm sản phẩm mới vào mảng inventoriesCache
        if (this.productsCache) {
          this.productsCache.push(addProduct);
        }
        return addProduct;
      })
    );
  }

  // Cập nhật 
  updateProduct(updatedProduct: Product): Observable<any> {
    const url = `${this.productUrl}/${updatedProduct.menuItemId}`;
    return this.apiService.request('put', url, updatedProduct).pipe(
      tap(() => {
        // Cập nhật danh sách cache sau khi cập nhật danh mục
        const index = this.productsCache!.findIndex(cat => cat.menuItemId === updatedProduct.menuItemId);
        if (index !== -1) {
          this.productsCache![index] = updatedProduct;
        }
      })
    );
  }
  updateProductCache(updatedProduct: Product): void {
    // Check if categoriesCache is null
    if (this.productsCache) {
      const index = this.productsCache.findIndex(cat => cat.menuItemId === updatedProduct.menuItemId);
      if (index !== -1) {
        this.productsCache[index] = updatedProduct;
      }
    }
  }
  // Xoá sản phẩm
  deleteProduct(id: number): Observable<any> {
    const url = `${this.productUrl}/${id}`;
    return this.apiService.request('delete', url);
  }

}
