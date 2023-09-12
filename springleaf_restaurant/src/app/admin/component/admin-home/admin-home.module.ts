import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHomeRoutingModule } from './admin-home-routing.module';
import { AdminProductDetailComponent } from './admin-product-detail/admin-product-detail.component';

@NgModule({

  imports: [
    CommonModule,
    AdminHomeRoutingModule
  ],

})
export class AdminHomeModule { }
