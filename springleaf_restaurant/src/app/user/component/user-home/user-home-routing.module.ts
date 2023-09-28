import { UserCartComponent } from './user-cart/user-cart.component';
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
        path: 'user/combo',
        loadChildren: () =>
          import('./user-combo/user-combo.module')
            .then(m => m.UserComboModule),
      },
      {
        path: 'user/event',
        loadChildren: () =>
          import('./user-event/user-event.module')
            .then(m => m.UserEventModule),
      },
      {
        path: 'user/table',
        loadChildren: () =>
          import('./user-table/user-table.module')
            .then(m => m.UserTableModule),
      },
      {
        path: 'user/restaurant',
        loadChildren: () =>
          import('./user-restaurant/user-restaurant.module')
            .then(m => m.UserRestaurantModule),
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
