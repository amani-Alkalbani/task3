import { NgModule } from '@angular/core';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AlertModule } from './_alert';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterPipe } from './pipes/filter.pipe';
import { TableModule } from 'primeng/table';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessagesModule } from 'primeng/messages';
import { CheckboxModule } from 'primeng/checkbox';


import { DialogModule } from 'primeng/dialog';
import { NavComponent } from './nav/nav.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    AddRestaurantComponent,
    UpdateRestaurantComponent,
    ListRestaurantComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FilterPipe,
    NavComponent,
    NavAdminComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AutoCompleteModule,
    ToastrModule.forRoot(),
    AlertModule,
    FontAwesomeModule,
    TableModule,
    BrowserAnimationsModule,
    ButtonModule,
    DropdownModule,
    PasswordModule,
    InputTextModule,
    PanelModule,
    ToolbarModule,
    SplitButtonModule,
    MessagesModule,
    CheckboxModule,
    DialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
