import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHomeRoutingModule } from './admin-home-routing.module';
import { AdminInventoryDetailComponent } from './admin-inventory-detail/admin-inventory-detail.component';
import { AdminTablesComponent } from './admin-tables/admin-tables.component';
import { AdminTableDetailComponent } from './admin-table-detail/admin-table-detail.component';


@NgModule({

  imports: [
    CommonModule,
    AdminHomeRoutingModule
  ],

  declarations: [
  ],

})
export class AdminHomeModule { }
