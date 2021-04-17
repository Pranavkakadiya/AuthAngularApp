import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//http
import {HttpClientModule,HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component'

import { AuthService } from './auth.service';

//badha ma apply thay etle
import { AuthGuard } from './auth.guard';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AuthInterceptor } from './authconfig.interceptor';
import { CustomstyleDirective } from './customstyle.directive';

//

import {UsersModule} from './users/users.module'

//admin module

import  {AdminModule} from './admin/admin.module'

//double for group routing
import {DoubleModule } from './double/double.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'



//angular material
import  {MatToolbarModule} from '@angular/material/toolbar'
import  {MatProgressBarModule} from '@angular/material/progress-bar'
import  {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatTooltipModule} from '@angular/material/tooltip';


//paginaiton
import {NgxPaginationModule} from 'ngx-pagination';

//search fileter
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//import order(sort) module 
import { OrderModule } from 'ngx-order-pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    CustomstyleDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    UsersModule,
    DoubleModule,
    AdminModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,

    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule,
    // AuthService
    
  ],
  providers: [AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
