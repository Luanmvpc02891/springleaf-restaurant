import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeRoutingModule } from './user-home-routing.module';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserFooterComponent } from './user-footer/user-footer.component';

@NgModule({
  imports: [
    CommonModule,
    UserHomeRoutingModule
  ],
  declarations: [
   
  ]
})
export class UserHomeModule { }
