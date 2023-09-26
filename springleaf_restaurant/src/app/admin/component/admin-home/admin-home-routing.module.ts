import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home.component';

const routes: Routes = [

  {
    path: 'admin',
    component: AdminHomeComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('./admin-products/admin-products.module').then(
            (m) => m.AdminProductsModule
          ),
        //component: UserCartComponent
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./admin-user/admin-user.module').then(
            (m) => m.AdminUserModule
          ),
        //component: UserCartComponent
      },
      {
        path: 'index',
        loadChildren: () =>
          import('./admin-index/admin-index.module').then(
            (m) => m.AdminIndexModule
          ),
        //component: UserCartComponent
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
