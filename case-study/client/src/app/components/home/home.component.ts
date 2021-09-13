import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductModelServer, ServerResponse } from 'src/app/models/product.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: [] = [];
  lstproducts: ProductModelServer[] = [];
  username = '';


  constructor(private productService: ProductService,
              private _router: Router,
              private _loginservice:LoginService) {

this._loginservice.getUserName()
    .subscribe(
                data => this.username= data.toString(),
                error => this._router.navigate(['../login'])
              )
}
              
logout(){
    localStorage.removeItem('token');
    this._router.navigate(['../login']);
}  
        
  ngOnInit(): void {
    this.getAllProducts();
    this.productService.getProductModelServe()
    .subscribe(
      data => {
        this.lstproducts = data;
      }
    )

  }

  getAllProducts(){
      this.productService.getAllProducts().subscribe((response) => {
        console.log('Response from API is', response);
      },(error) => {
        console.log('Error is', error);
      })
  }

}
