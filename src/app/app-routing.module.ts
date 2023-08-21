import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    component:HomeComponent, path:''
  },
  {
    component:AddRestaurantComponent , path:'add',canActivate: [AuthGuard]
  },
  {
    component:UpdateRestaurantComponent, path:'update/:id',canActivate: [AuthGuard]
  },
  {
    component:ListRestaurantComponent, path:'list',canActivate: [AuthGuard]},
  {
    component:LoginComponent, path:'login'},
  {
    component:RegisterComponent, path:'register'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
