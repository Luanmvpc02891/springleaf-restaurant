import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Product } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'http://localhost:8080/api/categories';  // URL to web api
  private productsCache: Product[] | null = null; // Biến cache lưu trữ dữ liệu

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  /** GET products from the server */
  getProducts(): Observable<Product[]> {
    // Kiểm tra nếu có dữ liệu trong cache, trả về dữ liệu đó
    if (this.productsCache) {
      return of(this.productsCache);
    }

    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        tap(categories => {
          this.productsCache = categories; // Lưu trữ dữ liệu vào cache
          console.log('fetched products');
        }),
        catchError(this.handleError<Product[]>('getProducts', []))
      );
  }

  /** GET Product by id. Return `undefined` when id not found */
  getProductNo404(id: number): Observable<Product> {
    // Tương tự, kiểm tra cache trước khi gọi API
    if (this.productsCache) {
      const product = this.productsCache.find(h => h.categoryId === id);
      if (product) {
        return of(product);
      }
    }

    const url = `${this.productsUrl}/?id=${id}`;
    return this.http.get<Product[]>(url)
      .pipe(
        map(products => products[0]),
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          console.log(`${outcome} product id=${id}`);
        }),
        catchError(this.handleError<Product>(`getProduct id=${id}`))
      );
  }

  /** GET Product by id. Will 404 if id not found */
  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => console.log(`fetched Product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  /* GET Productes whose name contains search term */
  searchProducts(term: string): Observable<Product[]> {
    if (!term.trim()) {
      // if not search term, return empty Product array.
      return of([]);
    }
    return this.http.get<Product[]>(`${this.productsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        console.log(`found Productes matching "${term}"`) :
        console.log(`no Productes matching "${term}"`)),
      catchError(this.handleError<Product[]>('searchProductes', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new Product to the server */
  addProduct(Product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, Product, this.httpOptions).pipe(
      tap((newProduct: Product) => {
        console.log(`added Product w/ id=${newProduct.categoryId}`);
      }),
      catchError(this.handleError<Product>('addProduct'))
    );
  }

  /** DELETE: delete the Product from the server */
  deleteProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.delete<Product>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted Product id=${id}`)),
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }

  /** PUT: update the Product on the server */
  updateProduct(Product: Product): Observable<any> {
    return this.http.put(this.productsUrl, Product, this.httpOptions).pipe(
      tap(_ => console.log(`updated Product id=${Product.categoryId}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
