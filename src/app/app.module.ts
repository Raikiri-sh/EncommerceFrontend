import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import {HomeComponent} from "./components/home/home.component";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {MaterialModule} from './material.module';
import {UserComponent} from "./components/user/user.component";
import {AdminComponent} from "./components/admin/admin.component";
import { MerchantComponent } from './components/merchant/merchant.component';
import {UserService} from "./services/user.service";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {AuthGuard} from "./auth/auth.guard";
import {ProductItemComponent} from "./components/home/product-item/product-item.component";
import {MatPaginatorModule} from "@angular/material/paginator";
// Routing paths
const routes: Routes = [

  { path: 'login', component: LoginComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    AdminComponent,
    MerchantComponent,
    ProductItemComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    MatPaginatorModule
  ],
  providers: [
    AuthGuard,  UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
