import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHomeRoutingModule } from './admin-home-routing.module';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';

@NgModule({

  imports: [
    CommonModule,
    AdminHomeRoutingModule
  ],

  declarations: [

    AdminCategoriesComponent
  ],

})
export class AdminHomeModule { }
