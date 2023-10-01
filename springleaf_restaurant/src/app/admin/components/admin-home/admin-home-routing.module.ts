import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home.component';

const routes: Routes = [

  {
    path: 'admin',
    component: AdminHomeComponent,
    children: [
      {
        path: 'index',
        loadChildren: () =>
          import('./admin-index/admin-index.module').then(
            (m) => m.AdminIndexModule
          ),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('./admin-categories/admin-categories.module').then(
            (m) => m.AdminCategoriesModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./admin-user/admin-user.module').then(
            (m) => m.AdminUserModule
          ),
      },
      {
        path: 'suppliers',
        loadChildren: () =>
          import('./admin-suppliers/admin-suppliers.module').then(
            (m) => m.AdminSuppliersModule
          ),
      },
      {
        path: 'ingredients',
        loadChildren: () =>
          import('./admin-ingredients/admin-ingredients.module').then(
            (m) => m.AdminIngredientsModule
          ),
      }

    ]
  },
  {
    path: 'admin/product/detail/:id',
    loadChildren: () => import('./admin-product-detail/admin-product-detail.module')
      .then(m => m.AdminProductDetailModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminHomeRoutingModule { }
