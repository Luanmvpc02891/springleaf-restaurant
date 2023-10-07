import { Component } from '@angular/core';
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
  inventori: Inventory[] = [];
  ingredient: Ingredient[] = [];
  supplier: Supplier[] = [];


  constructor(
    private ingventoryService: InventoryService,
    private route: ActivatedRoute,
    private ingredientService: IngredientService,
    private supplierService: SupplierService) {
  }

  ngOnInit(): void {
    this.getInventoris();
    this.getInventoris();
    this.getSuppliers();
  }
  getIngredients(): void {
    this.ingredientService.getIngredients()
      .subscribe(ingredient => this.ingredient = ingredient);
  }
  getInventoris(): void {
    this.ingventoryService.getInventoris()
      .subscribe(inventori => this.inventori = inventori);
  }
  getSuppliers(): void {
    this.supplierService.getSupplier()
      .subscribe(supplier => this.supplier = supplier);
  }
}
