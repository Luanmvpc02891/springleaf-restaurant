import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { Inventory } from 'src/app/interfaces/inventory';
import { Supplier } from 'src/app/interfaces/supplier';
import { IngredientService } from 'src/app/services/ingredient.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { SupplierService } from 'src/app/services/supplier.service';
import { AdminInventoryDetailComponent } from '../admin-inventory-detail/admin-inventory-detail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-inventories',
  templateUrl: './admin-inventories.component.html',
  styleUrls: ['./admin-inventories.component.css']
})
export class AdminInventoriesComponent {
  inventories: Inventory[] = [];
  ingredients: Ingredient[] = [];
  suppliers: Supplier[] = [];
  inventoryForm: FormGroup;
  inventory: Inventory | undefined;
  fieldNames: string[] = [];

  constructor(
    private inventoryService: InventoryService,
    private route: ActivatedRoute,
    private ingredientService: IngredientService,
    private supplierService: SupplierService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal) {
    this.inventoryForm = this.formBuilder.group({
      inventoryId: ['', [Validators.required]],
      ingredientId: ['', [Validators.required]],
      supplierId: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getInventories();
    this.getIngredients();
    this.getSuppliers();

  }

  getIngredients(): void {
    this.ingredientService.getIngredients()
      .subscribe(ingredient => this.ingredients = ingredient);
  }

  getIngredientById(ingredientId: number): Observable<Ingredient> {
    return this.ingredientService.getIngredient(ingredientId);
  }

  getInventories(): void {
    this.inventoryService.getInventories()
      .subscribe(inventories => this.inventories = inventories);
  }

  getSuppliers(): void {
    this.supplierService.getSupplier()
      .subscribe(supplier => this.suppliers = supplier);
  }

  addInventory(): void {
    // Lấy giá trị từ các trường select
    const ingredientId = this.inventoryForm.get('ingredientId')?.value;
    const supplierId = this.inventoryForm.get('supplierId')?.value;
    console.log("Giá trị đâu :" + ingredientId);
    // Kiểm tra xem người dùng đã chọn giá trị hợp lệ cho cả hai trường chưa
    if (!ingredientId && !supplierId) {
      alert('Vui lòng chọn cả nguyên liệu và nhà cung cấp.');
      return;
    }

    // Tạo một đối tượng Inventory và gán giá trị
    const newInventory: Inventory = {
      inventoryId: 0, // Không cần gán giá trị cho trường này vì nó có thể được tạo tự động
      ingredientId: ingredientId,
      supplierId: supplierId
    };

    this.inventoryService.addInventory(newInventory)
      .subscribe(inventory => {
        console.log('Inventory added:', inventory);
        // Lấy tên của thành phần và nhà cung cấp dựa vào ID 
        this.inventories.push(inventory);
        // Cập nhật inventoriesCache trong service
        this.inventoryService.updateInventoryCache(this.inventories);

        this.inventoryForm.reset();
      });

  }
  deleteInventory(inventory: Inventory): void {
    this.inventories = this.inventories.filter(i => i !== inventory);
    this.inventoryService.deleteInventory(inventory.inventoryId).subscribe();
  }
  openInventoryDetailModal(inventory: Inventory) {
    //this.getCategory();
    const modalRef = this.modalService.open(AdminInventoryDetailComponent, { size: 'lg' });
    modalRef.componentInstance.inventory = inventory;

  }
}
