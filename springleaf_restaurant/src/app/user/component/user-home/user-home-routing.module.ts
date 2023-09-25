import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home.component';

const routes: Routes = [

  {
    path: '',
    component: UserHomeComponent,
    children: [
      {
        path: 'user/index',
        loadChildren: () =>
          import('./user-index/user-index.module').then(
            (m) => m.UserIndexModule
          ),
        //component: UserCartComponent
      },
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
      {
        path: 'chat',
        loadChildren: () => import('../../../component/chat/chat.module')
          .then(m => m.ChatModule)
        //component: ChatComponent
      },
      {
        path: 'user/product/detail',
        loadChildren: () =>
          import('./user-product-detail/user-product-detail.module')
            .then(m => m.UserProductDetailModule),
      },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserHomeRoutingModule { }
