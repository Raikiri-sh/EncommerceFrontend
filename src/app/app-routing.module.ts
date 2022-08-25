import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {AdminComponent} from "./components/admin/admin.component";
import {UserComponent} from "./components/user/user.component";
import {MerchantComponent} from "./components/merchant/merchant.component";
import {AuthGuard} from "./auth/auth.guard";



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  // { path: 'user', component: UserComponent ,  canActivate:[AuthGuard], data:{roles:['User']} },
  // { path: 'merchant', component: UserComponent ,  canActivate:[AuthGuard], data:{roles:['Merchant']} },
   { path: 'login', component: LoginComponent },


  { path: 'admin', component: AdminComponent,data:{roles:['Admin']} },
  { path: 'user', component: UserComponent , canActivate:[AuthGuard],  data:{roles:['User']} },
  { path: 'merchant', component: MerchantComponent ,  data:{roles:['Merchant']} },
  { path: '**', redirectTo: '/heroes', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
