import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home.component';
import { AdminHomeComponent } from 'src/app/admin/component/admin-home/admin-home.component';

const routes: Routes = [

  {
    path: '',
    component: UserHomeComponent,
    children: [
      {
        path: 'user/products',
        loadChildren: () =>
          import('./user-products/user-products.module').then(
            (m) => m.UserProductsModule
          ),
        //component: UserCartComponent
      },
      {
        path: 'user/cart',
        loadChildren: () =>
          import('./user-cart/user-cart.module').then(
            (m) => m.UserCartModule
          ),
        //component: UserCartComponent
      },
    ]
  },
  {
    path: 'user/product/detail/:id',
    loadChildren: () => import('./user-product-detail/user-product-detail.module')
      .then(m => m.UserProductDetailModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserHomeRoutingModule { }
