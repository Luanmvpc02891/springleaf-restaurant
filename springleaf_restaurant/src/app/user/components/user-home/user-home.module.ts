import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeRoutingModule } from './user-home-routing.module';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';

@NgModule({
  imports: [
    CommonModule,
    UserHomeRoutingModule
  ],
  declarations: [
  ]
})
export class UserHomeModule { }
