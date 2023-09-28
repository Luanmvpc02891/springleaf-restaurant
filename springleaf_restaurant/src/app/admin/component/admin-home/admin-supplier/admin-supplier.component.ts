import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Supplier } from 'src/app/interface/supplier';
import { SupplierService } from 'src/app/service/supplier.service';

@Component({
  selector: 'app-admin-supplier',
  templateUrl: './admin-supplier.component.html',
  styleUrls: ['./admin-supplier.component.css']
})
export class AdminSupplierComponent {
  supplier: Supplier[] = [];

  constructor(private supplierService: SupplierService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getSuppliers();
  }

  getSuppliers(): void {
    this.supplierService.getSupplier()
      .subscribe(supplier => this.supplier = supplier);
  }
}
