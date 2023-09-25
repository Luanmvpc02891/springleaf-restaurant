import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCategoriesComponent } from './user-categories.component';

const routes: Routes = [
  {
    path: '',
    component: UserCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCategoriesRoutingModule { }
