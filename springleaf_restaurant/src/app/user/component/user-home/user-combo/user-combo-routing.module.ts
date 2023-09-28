import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComboComponent } from './user-combo.component';

const routes: Routes = [
  {
    path: '',
    component: UserComboComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserComboRoutingModule { }
