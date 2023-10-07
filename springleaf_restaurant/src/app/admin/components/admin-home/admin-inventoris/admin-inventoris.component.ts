import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { Inventory } from 'src/app/interfaces/inventory';
import { Supplier } from 'src/app/interfaces/supplier';
import { IngredientService } from 'src/app/services/ingredient.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-admin-inventoris',
  templateUrl: './admin-inventoris.component.html',
  styleUrls: ['./admin-inventoris.component.css']
})
export class AdminInventorisComponent {
  inventoris: Inventory[] = [];
  ingredient: Ingredient[] = [];
  supplier: Supplier[] = [];
  inventoryForm: FormGroup;


  constructor(
    private ingventoryService: InventoryService,
    private route: ActivatedRoute,
    private ingredientService: IngredientService,
    private supplierService: SupplierService,
    private formBuilder: FormBuilder) {
    this.inventoryForm = this.formBuilder.group({
      ingredientId: ['', [Validators.required]],
      supplierId: [, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getInventoris();
    this.getIngredients();
    this.getSuppliers();
  }
  getIngredients(): void {
    this.ingredientService.getIngredients()
      .subscribe(ingredient => this.ingredient = ingredient);
  }
  getInventoris(): void {
    this.ingventoryService.getInventoris()
      .subscribe(inventoris => this.inventoris = inventoris);
  }
  getSuppliers(): void {
    this.supplierService.getSupplier()
      .subscribe(supplier => this.supplier = supplier);
  }

  addInventory(): void {

    const ingredientId = this.inventoryForm.get('ingredientId')?.value;
    const supplierId = this.inventoryForm.get('supplierId')?.value;


    // if (!ingredientId || supplierId === null) { return; }

    this.ingventoryService.addInventory({ ingredientId, supplierId, } as Inventory)
      .subscribe(inventory => {
        this.inventoris.push(inventory);
        this.inventoryForm.reset();

      });
  }
}
