import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeRoutingModule } from './user-home-routing.module';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserIndexComponent } from './user-index/user-index.component';

@NgModule({
  imports: [
    CommonModule,
    UserHomeRoutingModule
  ],
  declarations: [
    // UserFooterComponent
  
    UserIndexComponent
  ]
})
export class UserHomeModule { }
