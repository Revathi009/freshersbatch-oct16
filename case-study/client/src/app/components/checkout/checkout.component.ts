import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
// import { render } from 'creditcardpayments/creditCardPayments';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/products';


interface cartItem {
  product: Product
  quantity: number
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public products: any = [];
  public orderMessage = "";
  public grandTotal: number = 0;

  cart;
  total = 0
  cartItems: cartItem[] = [];

  constructor(private _orderService: OrderService,
    private _router: Router,
    private _cartSevice: CartService) { 
    //   render(
    //     {
    //       id: "#myPaypalButton",
    //       currency: "USD",
    //       value: "100.00",
    //       onApprove: (details) => {
    //         alert("Transaction successfull");
    //       }
    //     }
    //   );
    }

  ngOnInit(): void {}

  
}
