import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProductDetailRoutingModule } from './user-product-detail-routing.module';
import { Routes } from '@angular/router';
import { UserProductDetailComponent } from './user-product-detail.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserProductDetailRoutingModule
  ]
})
export class UserProductDetailModule { }
