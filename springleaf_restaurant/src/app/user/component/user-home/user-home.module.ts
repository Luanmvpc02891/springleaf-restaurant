import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeRoutingModule } from './user-home-routing.module';
import { HeaderComponent } from './user-header/user-header.component';
import { UserProductsComponent } from './user-products/user-products.component';


@NgModule({
  declarations: [
    UserProductsComponent
  ],
  imports: [
    CommonModule,
    UserHomeRoutingModule
  ]
})
export class UserHomeModule { }
