import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHomeRoutingModule } from './admin-home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminInventorisComponent } from './admin-inventoris/admin-inventoris.component';
import { AdminInventoryDetailComponent } from './admin-inventory-detail/admin-inventory-detail.component';

@NgModule({

  imports: [
    CommonModule,
    AdminHomeRoutingModule,
    ReactiveFormsModule,
  ],

  declarations: [
  ],

})
export class AdminHomeModule { }
