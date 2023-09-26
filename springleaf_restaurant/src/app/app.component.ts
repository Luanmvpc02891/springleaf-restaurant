import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './service/product.service';
import { Category } from './interface/category';
import { CategoryService } from './service/category.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'springleaf_restaurant';

  callAPIsWorker !: Worker;

  constructor(private productsService: ProductService, private categoryService: CategoryService) {
    this.callAPIsWorker = new Worker(new URL('./call-apis.worker', import.meta.url));
    this.startCategoriesAndProducts();
  }

  startCategoriesAndProducts(): void {
    this.callAPIsWorker.postMessage('start');
    this.callAPIsWorker.onmessage = ({ data }) => {
      if (data.type === 'categories') {
        this.categoryService.categoriesCache = data.data;
        console.log('Received categories:', data.data);
        // Các xử lý khác nếu cần
      } else if (data.type === 'products') {
        this.productsService.productsCache = data.data;
        console.log('Received products:', data.data);
        // Các xử lý khác nếu cần
      }
    };
  }

  ngOnDestroy(): void {
    this.callAPIsWorker.terminate();
  }

}
