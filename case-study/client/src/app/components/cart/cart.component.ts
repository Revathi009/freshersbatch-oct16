import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: any = [];
  public grandTotal: number = 0;
  constructor(private _cartSevice: CartService) { }

  ngOnInit(): void {
    this._cartSevice.getProducts().subscribe(res => {
      this.products = res;
      this.grandTotal = this._cartSevice.getTotalPrice();
    })
  }
  removeItem(p: any){
    this._cartSevice.removeCartItem(p);
  }

  emptycart(){
    this._cartSevice.removeAllCart();
  }

}
