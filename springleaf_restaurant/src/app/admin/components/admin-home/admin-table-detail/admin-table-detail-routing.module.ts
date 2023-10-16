import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTableDetailComponent } from './admin-table-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AdminTableDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTableDetailRoutingModule { }
