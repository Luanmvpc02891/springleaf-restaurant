import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Supplier } from 'src/app/interfaces/supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-admin-supplier',
  templateUrl: './admin-suppliers.component.html',
  styleUrls: ['./admin-suppliers.component.css']
})
export class AdminSuppliersComponent {
  supplier: Supplier[] = [];

  constructor(private supplierService: SupplierService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getSuppliers();
  }

  getSuppliers(): void {
    this.supplierService.getSuppliers()
      .subscribe(supplier => this.supplier = supplier);
  }
}
