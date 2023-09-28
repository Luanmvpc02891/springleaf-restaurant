import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminIngredientComponent } from './admin-ingredient.component';

const routes: Routes = [
  {
    path: '',
    component: AdminIngredientComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminIngredientRoutingModule { }
