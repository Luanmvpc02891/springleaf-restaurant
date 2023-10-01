import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { UserHomeComponent } from './user/components/user-home/user-home.component';
import { UserHeaderComponent } from './user/components/user-home/user-header/user-header.component';
import { UserCartComponent } from './user/components/user-home/user-cart/user-cart.component';
import { UserProductsComponent } from './user/components/user-home/user-products/user-products.component';
import { UserProductDetailComponent } from './user/components/user-home/user-product-detail/user-product-detail.component';
import { UserCategoriesComponent } from './user/components/user-home/user-categories/user-categories.component';
import { UserCombosComponent } from './user/components/user-home/user-combos/user-combos.component';
import { UserEventsComponent } from './user/components/user-home/user-events/user-events.component';
import { UserTablesComponent } from './user/components/user-home/user-tables/user-tables.component';
import { UserRestaurantsComponent } from './user/components/user-home/user-restaurants/user-restaurants.component';
import { UserIndexComponent } from './user/components/user-home/user-index/user-index.component';
import { UserFooterComponent } from './user/components/user-home/user-footer/user-footer.component';

import { AdminHomeComponent } from './admin/component/admin-home/admin-home.component';
import { AdminHeaderComponent } from './admin/component/admin-home/admin-header/admin-header.component';
import { AdminProductsComponent } from './admin/component/admin-home/admin-products/admin-products.component';
import { AdminProductDetailComponent } from './admin/component/admin-home/admin-product-detail/admin-product-detail.component';
import { AdminUserComponent } from './admin/component/admin-home/admin-user/admin-user.component';
import { AdminIndexComponent } from './admin/component/admin-home/admin-index/admin-index.component';
import { AdminFooterComponent } from './admin/component/admin-home/admin-footer/admin-footer.component';
import { AdminSuppliersComponent } from './admin/component/admin-home/admin-suppliers/admin-suppliers.component';
import { AdminIngredientsComponent } from './admin/component/admin-home/admin-ingredients/admin-ingredients.component';

import { ChatComponent } from './components/chat/chat.component';
import { WebSocketService } from './services/web-socket.service';
import { ChatService } from './services/chat.service';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,

    UserHomeComponent,
    UserCartComponent,
    UserHeaderComponent,
    UserProductsComponent,
    UserProductDetailComponent,
    UserIndexComponent,
    UserFooterComponent,
    UserCategoriesComponent,
    UserCombosComponent,
    UserEventsComponent,
    UserTablesComponent,
    UserRestaurantsComponent,

    AdminHeaderComponent,
    AdminProductsComponent,
    AdminProductDetailComponent,
    AdminUserComponent,
    AdminIndexComponent,
    AdminFooterComponent,
    AdminSuppliersComponent,
    AdminIngredientsComponent,
    AdminHomeComponent,

    ChatComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    WebSocketService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
