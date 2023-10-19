import { ActivatedRoute } from '@angular/router';
import { AdminProductDetailComponent } from './../admin-product-detail/admin-product-detail.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
  product: Product | undefined;
  products: Product[] = [];
  categories: Category[] = [];
  productForm: FormGroup;

  constructor(
    private productsService: ProductService,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,) {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      categoryId: ['', [Validators.required]],
      status: [, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(category => this.categories = category);
  }
  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(product => this.products = product);
  }
  getCategoryById(categoryId: number): Observable<Category> {
    return this.categoryService.getCategory(categoryId);
  }
  addProduct(): void {
    // Lấy giá trị từ các trường select
    const name = this.productForm.get('name')?.value;
    const price = this.productForm.get('price')?.value;
    const description = this.productForm.get('description')?.value;
    const status = this.productForm.get('status')?.value;
    const imageUrl = this.productForm.get('imageUrl')?.value;
    const categoryId = this.productForm.get('categoryId')?.value;
    console.log("Giá trị đâu :" + name);

    // Tạo một đối tượng Inventory và gán giá trị
    const newProduct: Product = {
      menuItemId: 0,
      name: name,
      price: price,
      description: description,
      status: status,
      imageUrl: imageUrl,
      categoryId: categoryId,
    };

    this.productsService.addProduct(newProduct)
      .subscribe(product => {
        console.log('Inventory added:', product);
        // Lấy tên của thành phần và nhà cung cấp dựa vào ID 
        this.products.push(product);
        // Cập nhật inventoriesCache trong service
        this.productForm.get('status')?.setValue(true);
        this.productForm.reset();
      });

  }

  deleteProduct(product: Product): void {
    this.products = this.products.filter(c => c !== product);
    this.productsService.deleteProduct(product.menuItemId).subscribe();
  }
  openProductDetailModal(product: Product) {
    //this.getCategory();
    const modalRef = this.modalService.open(AdminProductDetailComponent, { size: 'lg' });
    modalRef.componentInstance.product = product;
  }

}
