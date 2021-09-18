import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public Item: number = 0;
  public searchTerm: string = '';
  username = '';

  constructor(private _cartService: CartService,
              private _loginservice: LoginService,
              private _registerService: RegisterService,
              private _router: Router) {
    this._loginservice.getUserName()
    .subscribe(
                data => this.username= data.toString(),
                error => this._router.navigate(['../login'])
              )
   }

  ngOnInit(): void {
    this._cartService.getProducts().subscribe(res => {
      this.totalItem = res.length;
    });

  }

  // this._cartService.getProducts().subscribe(res => {
  //   this.Item = res.length;
  // })

  search(event: any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this._cartService.search.next(this.searchTerm);
  }

  logoutUser(){
    localStorage.removeItem('token');
  }  

  getToken(){
    return localStorage.getItem('token');
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }



}
