import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
      ingredient: ['', [Validators.required]],
      supplier: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.getSuppliers();
    this.getIngredients();
    this.setValue();

  }

  setValue() {
    if (this.inventory) {
      this.inventoryForm.patchValue({
        inventoryId: this.inventory.inventoryId,
        ingredient: this.inventory.ingredient.ingredientId,
        supplier: this.inventory.supplier.supplierId
      });
    }
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
  saveInventory(): void {
    this.activeModal.close('Close after saving');
    if (this.inventoryForm.valid) {

      const inventoryId = this.inventoryForm.get('inventoryId')?.value;
      const ingredientId = this.inventoryForm.get('ingredient')?.value;
      const supplierId = this.inventoryForm.get('supplier')?.value;

      // Tạo một đối tượng Inventory và gán giá trị
      const updatedInventory: Inventory = {
        inventoryId,
        ingredient: { ingredientId, name: '', description: '', orderThreshold: 0 },
        supplier: { supplierId, name: '', address: '', phone: 0, email: '' },
      };
      this.inventoryService.updateInventory(updatedInventory).subscribe(() => {
        // Cập nhật cache
        this.inventoryService.updateInventoryCache(updatedInventory);
        
      });
    }
  }
}
