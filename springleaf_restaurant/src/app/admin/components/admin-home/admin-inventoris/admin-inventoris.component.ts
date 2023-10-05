import { Ingredient } from './../../../../interfaces/ingredient';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Supplier } from 'src/app/interfaces/supplier';
import { IngredientService } from 'src/app/services/ingredient.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { SupplierService } from 'src/app/services/supplier.service';
import { Inventory } from 'src/app/interfaces/inventory';
import { AdminInventoryDetailComponent } from '../admin-inventory-detail/admin-inventory-detail.component';

@Component({
  selector: 'app-admin-inventoris',
  templateUrl: './admin-inventoris.component.html',
  styleUrls: ['./admin-inventoris.component.css']
})
export class AdminInventorisComponent {
  inventoris: Inventory[] = [];
  ingredients: Ingredient[] = [];
  suppliers: Supplier[] = [];
  inventory: Inventory | undefined;
  inventoryForm: FormGroup;
  constructor(
    private inventoryService: InventoryService,
    private supplierService: SupplierService,
    private ingredientService: IngredientService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {
    this.inventoryForm = this.formBuilder.group({
      inventoryId: ['', [Validators.required]],
      ingredient: ['', [Validators.required]],
      supplier: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getInventoris();
    this.getSuppliers();
    this.getIngredients();

  }


  getInventoris(): void {
    this.inventoryService.getInventoris()
      .subscribe(inventory => this.inventoris = inventory);
  }

  getSuppliers(): void {
    this.supplierService.getSupplier()
      .subscribe(supplier => this.suppliers = supplier);
  }

  getIngredients(): void {
    this.ingredientService.getIngredients()
      .subscribe(ingredient => this.ingredients = ingredient);
  }

  getInventory(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.inventoryService.getInventory(id)
      .subscribe(inventory => this.inventory = inventory);
    this.inventoryForm.get('ingredient')?.setValue(this.inventory?.ingredient);
  }
  addInventory(): void {
    // Lấy giá trị từ các trường select
    const ingredientId = this.inventoryForm.get('ingredient')?.value;
    const supplierId = this.inventoryForm.get('supplier')?.value;

    // Kiểm tra xem người dùng đã chọn giá trị hợp lệ cho cả hai trường chưa
    if (!ingredientId || !supplierId) {
      alert('Vui lòng chọn cả nguyên liệu và nhà cung cấp.');
      return;
    }

    // Tạo một đối tượng Inventory và gán giá trị
    const newInventory: Inventory = {
      ingredient: {
        ingredientId,
        name: '',
        description: '',
        orderThreshold: 0
      },
      supplier: {
        supplierId,
        name: '',
        address: '',
        phone: 0,
        email: ''
      },
      inventoryId: 0
    };

    this.inventoryService.addInventory(newInventory)
      .subscribe(inventory => {
        console.log('Inventory added:', inventory);
        this.inventoris.push(inventory);
        this.inventoryForm.reset();
        alert('Add thành công');
      });
  }
  deleteInventory(inventory: Inventory): void {
    this.inventoris = this.inventoris.filter(c => c !== inventory);
    this.inventoryService.deleteInventory(inventory.inventoryId).subscribe();
  }
  openInventoryDetailModal(inventory: Inventory) {
    //this.getCategory();
    const modalRef = this.modalService.open(AdminInventoryDetailComponent, { size: 'lg' });
    modalRef.componentInstance.inventory = inventory;
  }
}
