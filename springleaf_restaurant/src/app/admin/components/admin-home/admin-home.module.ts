import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHomeRoutingModule } from './admin-home-routing.module';
import { AdminInventoryDetailComponent } from './admin-inventory-detail/admin-inventory-detail.component';
import { AdminRestaurantTablesComponent } from './admin-restaurant-tables/admin-restaurant-tables.component';
import { AdminRestaurantTableDetailComponent } from './admin-restaurant-table-detail/admin-restaurant-table-detail.component';
import { AdminIngredientDetailComponent } from './admin-ingredient-detail/admin-ingredient-detail.component';


@NgModule({

  imports: [
    CommonModule,
    AdminHomeRoutingModule
  ],

  declarations: [
  ],

})
export class AdminHomeModule { }
