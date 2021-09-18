import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
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
import { FilterPipe } from './shared/filter.pipe';
import { OrderService } from './services/order.service';
import { AdminComponent } from './components/admin/admin.component';
import { AdminService } from './services/admin.service';
// import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    HomeComponent,
    ProductComponent,
    FooterComponent,
    CheckoutComponent,
    RegisterComponent,
    LoginComponent,
    FilterPipe,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // MatButtonModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatRippleModule
    ],
  providers: [ProductService, RegisterService, LoginService, OrderService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
