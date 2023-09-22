import { AdminProductDetailComponent } from './../admin-product-detail/admin-product-detail.component';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/user/interface/products';
import { ProductService } from 'src/app/service/products.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(categories => this.products = categories);
  }

  // openProductModal(product: Product) {
  //   const modalRef = this.modalService.open(AdminProductDetailComponent, { size: 'lg' });
  //   modalRef.componentInstance.product = product;
  // }

}
