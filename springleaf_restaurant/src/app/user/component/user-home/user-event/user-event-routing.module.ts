import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEventModule } from './user-event.module';
import { UserEventComponent } from './user-event.component';

const routes: Routes = [
  {
    path: '',
    component: UserEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserEventRoutingModule { }
