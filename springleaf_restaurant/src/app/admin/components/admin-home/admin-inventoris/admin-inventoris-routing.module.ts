import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminInventorisComponent } from './admin-inventoris.component';

const routes: Routes = [
  {
    path: '',
    component: AdminInventorisComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminInventorisRoutingModule { }
