import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeRoutingModule } from './user-home-routing.module';
import { UserFooterComponent } from './user-footer/user-footer.component';

@NgModule({
  imports: [
    CommonModule,
    UserHomeRoutingModule
  ],
  declarations: [
    // UserFooterComponent
  ]
})
export class UserHomeModule { }
