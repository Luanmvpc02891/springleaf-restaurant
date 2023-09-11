import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './admin/component/admin-home/admin-home.component';
import { UserHomeComponent } from './user/component/user-home/user-home.component';
import { UserHomeRoutingModule } from './user/component/user-home/user-home-routing.module';
import { AdminHomeRoutingModule } from './admin/component/admin-home/admin-home-routing.module';
import { UserCartComponent } from './user/component/user-home/user-cart/user-cart.component';
import { HeaderComponent } from './user/component/user-home/user-header/user-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    UserHomeComponent,
    UserCartComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
