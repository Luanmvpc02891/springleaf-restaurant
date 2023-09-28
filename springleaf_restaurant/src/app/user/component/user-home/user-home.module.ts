import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeRoutingModule } from './user-home-routing.module';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserCategoriesComponent } from './user-categories/user-categories.component';
import { UserComboComponent } from './user-combo/user-combo.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserRestaurantComponent } from './user-restaurant/user-restaurant.component';


@NgModule({
  imports: [
    CommonModule,
    UserHomeRoutingModule
  ],
  declarations: [
  ]
})
export class UserHomeModule { }
