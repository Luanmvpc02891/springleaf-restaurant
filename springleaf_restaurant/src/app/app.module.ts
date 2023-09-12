import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './admin/component/admin-home/admin-home.component';
import { UserHomeComponent } from './user/component/user-home/user-home.component';
import { UserCartComponent } from './user/component/user-home/user-cart/user-cart.component';
import { UserHeaderComponent } from './user/component/user-home/user-header/user-header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProductsComponent } from './user/component/user-home/user-products/user-products.component';
import { UserProductDetailComponent } from './user/component/user-home/user-product-detail/user-product-detail.component';
import { AdminHeaderComponent } from './admin/component/admin-home/admin-header/admin-header.component';
import { AdminProductsComponent } from './admin/component/admin-home/admin-products/admin-products.component';
import { AdminProductDetailComponent } from './admin/component/admin-home/admin-product-detail/admin-product-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    UserHomeComponent,
    UserCartComponent,
    UserHeaderComponent,
    UserProductsComponent,
    UserProductDetailComponent,
    AdminHeaderComponent,
    AdminProductsComponent,
    AdminProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
