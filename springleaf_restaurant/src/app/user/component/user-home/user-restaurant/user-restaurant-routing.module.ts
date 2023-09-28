import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRestaurantComponent } from './user-restaurant.component';

const routes: Routes = [
  {
    path: '',
    component: UserRestaurantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRestaurantRoutingModule { }
