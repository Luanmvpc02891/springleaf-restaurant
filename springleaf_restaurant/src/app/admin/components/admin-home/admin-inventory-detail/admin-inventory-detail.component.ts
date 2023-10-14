import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { Inventory } from 'src/app/interfaces/inventory';
import { Supplier } from 'src/app/interfaces/supplier';
import { IngredientService } from 'src/app/services/ingredient.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-admin-inventory-detail',
  templateUrl: './admin-inventory-detail.component.html',
  styleUrls: ['./admin-inventory-detail.component.css']
})
export class AdminInventoryDetailComponent implements OnInit {
  @Input() inventory: Inventory | undefined;
  inventoryForm: FormGroup;
  inventoris: Inventory[] = [];
  suppliers: Supplier[] = [];
  ingredients: Ingredient[] = [];
  fieldNames: string[] = [];

  constructor(
    private inventoryService: InventoryService,
    private supplierService: SupplierService,
    private ingredientService: IngredientService,
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,

  ) {
    this.inventoryForm = this.formBuilder.group({
      inventoryId: ['', [Validators.required]],
      ingredientId: ['', [Validators.required]],
      supplierId: ['', [Validators.required]]

    });
  }
  ngOnInit(): void {
    this.setValue();
    this.getSuppliers();
    this.getIngredients();
  }

  setValue() {
    if (this.inventory) {
      this.inventoryForm.patchValue({
        inventoryId: this.inventory.inventoryId,
        ingredientId: this.inventory.ingredientId,
        supplierId: this.inventory.supplierId
      });
    }
  }
  getSuppliers(): void {
    this.supplierService.getSuppliers()
      .subscribe(supplier => this.suppliers = supplier);
  }

  getIngredients(): void {
    this.ingredientService.getIngredients()
      .subscribe(ingredient => this.ingredients = ingredient);
  }

  saveInventory(): void {
    this.activeModal.close('Close after saving');
    if (this.inventoryForm.valid) {
      const updatedInventory: Inventory = {
        inventoryId: this.inventoryForm.get('inventoryId')?.value,
        ingredientId: this.inventoryForm.get('ingredientId')?.value,
        supplierId: this.inventoryForm.get('supplierId')?.value,
      };

      this.inventoryService.updateInventory(updatedInventory).subscribe(() => {
        // Cập nhật cache và danh sách inventory sau khi cập nhật
        this.inventoryService.updatedInventoryCache(updatedInventory);
      });
    }
  }

}
