import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSupplierComponent } from './admin-supplier.component';

const routes: Routes = [
  {
    path: '',
    component: AdminSupplierComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSupplierRoutingModule { }
