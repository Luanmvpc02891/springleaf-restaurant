import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTablesComponent } from './user-tables.component';

const routes: Routes = [
  {
    path: '',
    component: UserTablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTablesRoutingModule { }
