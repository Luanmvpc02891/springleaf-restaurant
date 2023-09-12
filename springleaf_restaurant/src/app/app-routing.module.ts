import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: '/user/products', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./user/component/user-home/user-home.module').then(
        (m) => m.UserHomeModule
      ),
    //component: UserHomeComponent
  },
  { path: 'admin', redirectTo: '/admin/products', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./admin/component/admin-home/admin-home.module').then(
        (m) => m.AdminHomeModule
      ),
    //component: AdminHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
