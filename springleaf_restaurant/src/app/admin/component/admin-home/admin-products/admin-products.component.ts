import { AdminProductDetailComponent } from './../admin-product-detail/admin-product-detail.component';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/user/interface/products';
import { ProductService } from 'src/app/service/products.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  productForm: FormGroup;
  products: Product[] = [];

  constructor(private productsService: ProductService, private modalService: NgbModal, private fb: FormBuilder) {
    this.productForm = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(categories => this.products = categories);
  }

  addProduct(): void {
    const categoryId: number | undefined = +this.productForm.get('id')?.value?.trim(); // Convert value to a number
    if (!categoryId) { return; } // Check if id is a valid number
    this.productsService.addProduct({ categoryId } as Product)
      .subscribe(product => {
        this.productsService.productsCache?.push(product);
        this.getProducts();
        this.productForm.reset(); // Reset form after adding a product
      });
  }

  // openProductModal(product: Product) {
  //   const modalRef = this.modalService.open(AdminProductDetailComponent, { size: 'lg' });
  //   modalRef.componentInstance.product = product;
  // }

}
