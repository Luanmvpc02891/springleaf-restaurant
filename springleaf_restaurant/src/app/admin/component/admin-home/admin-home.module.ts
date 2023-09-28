import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHomeRoutingModule } from './admin-home-routing.module';
import { AdminProductDetailComponent } from './admin-product-detail/admin-product-detail.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminSupplierComponent } from './admin-supplier/admin-supplier.component';
import { AdminIngredientComponent } from './admin-ingredient/admin-ingredient.component';

@NgModule({

  imports: [
    CommonModule,
    AdminHomeRoutingModule
  ],

  declarations: [
  ],

})
export class AdminHomeModule { }
