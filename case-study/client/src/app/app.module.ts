import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductService } from './services/product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { RegisterService } from './services/register.service';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { OrderService } from './services/order.service';
import { AdminComponent } from './components/admin/admin.component';
import { AdminService } from './services/admin.service';
import { FileUploadModule } from 'ng2-file-upload';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    HomeComponent,
    FooterComponent,
    CheckoutComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    
    ],
  providers: [ProductService, RegisterService, LoginService, OrderService, AdminService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
