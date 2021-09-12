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
    RegisterComponent
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
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
