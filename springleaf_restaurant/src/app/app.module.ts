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

import { AdminHomeComponent } from './admin/components/admin-home/admin-home.component';
import { AdminHeaderComponent } from './admin/components/admin-home/admin-header/admin-header.component';
import { AdminProductsComponent } from './admin/components/admin-home/admin-products/admin-products.component';
import { AdminProductDetailComponent } from './admin/components/admin-home/admin-product-detail/admin-product-detail.component';
import { AdminUserComponent } from './admin/components/admin-home/admin-user/admin-user.component';
import { AdminIndexComponent } from './admin/components/admin-home/admin-index/admin-index.component';
import { AdminFooterComponent } from './admin/components/admin-home/admin-footer/admin-footer.component';
import { AdminSuppliersComponent } from './admin/components/admin-home/admin-suppliers/admin-suppliers.component';
import { AdminIngredientsComponent } from './admin/components/admin-home/admin-ingredients/admin-ingredients.component';

import { ChatComponent } from './components/chat/chat.component';
import { WebSocketService } from './services/web-socket.service';
import { ChatService } from './services/chat.service';
import { LoginComponent } from './components/login/login.component';
import { AdminCategoriesComponent } from './admin/components/admin-home/admin-categories/admin-categories.component';
import { AdminCategoryDetailComponent } from './admin/components/admin-home/admin-category-detail/admin-category-detail.component';
import { CommonModule } from '@angular/common';
import { AdminInventoriesComponent } from './admin/components/admin-home/admin-inventories/admin-inventories.component';
import { AdminInventoryDetailComponent } from './admin/components/admin-home/admin-inventory-detail/admin-inventory-detail.component';
import { AdminTablesComponent } from './admin/components/admin-home/admin-tables/admin-tables.component';
import { AdminTableDetailComponent } from './admin/components/admin-home/admin-table-detail/admin-table-detail.component';


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
    AdminCategoriesComponent,
    AdminCategoryDetailComponent,
    AdminInventoriesComponent,
    AdminInventoryDetailComponent,
    AdminTablesComponent,
    AdminTableDetailComponent,

    ChatComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    CommonModule, // Import CommonModule here
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    WebSocketService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
