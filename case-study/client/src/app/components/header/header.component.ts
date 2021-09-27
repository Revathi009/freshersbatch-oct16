import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router, NavigationStart } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
  numberOfItems : number = 0;
  isLoggedIn = false;
  isAdmin: boolean = false;
  isAdminUrl = false;

  constructor(private _cartService: CartService,
              private _userService: UserService,
              private router: Router) {

                router.events.subscribe({
                  next : (event)=>{
                    console.log(event);
                    
                    if(event instanceof NavigationStart)
                    {
                      let url = (<NavigationStart>event).url
                        this.isAdminUrl = url.includes('/admin')
                    }
                  }
                })
   
   }

  ngOnInit(): void {
    // this._cartService.getProducts().subscribe(res => {
    //   this.totalItem = res.length;
    // });
    this._cartService.cartObservable.subscribe({
      next : (cart)=> {
        console.log(cart)
        this.numberOfItems = Object.keys(cart).length
      }
    })

  this._userService.loginObservable.subscribe(
    {
      next : ()=>{

        let token = this._userService.getToken();
        if(token!= ''){
          this.cheakAdmin()
          this.isLoggedIn = true;
        }else{
          this.isLoggedIn = false;
        }
        console.log(this.isLoggedIn);
        
      }
    }
  )
}

cheakAdmin(){
  // cheak user is admin or not 
  this._userService.isAdmin().subscribe(
    (isAdmin)=>{
      this.isAdmin = isAdmin
    }
  )
}

logout(){
  // alert('')
  this._userService.logout()
  this.router.navigate(['login'])
}
}
