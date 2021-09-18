import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public products: any = [];
  public orderMessage = "";
  constructor(private _orderService: OrderService,
    private _router: Router,) { 

      render(
        {
          id: "#myPaypalButtons",
          currency: "USD",
          value: "100.00",
          onApprove: (details) => {
            alert("Transaction successfull");
          }
        }
      );
    }

  ngOnInit(): void {
    this.ordernow();
  }

  ordernow(){
    this._orderService.submitOrder((resp: any) => {
      console.log("Response from api", resp)
    })
    .subscribe(
      data => this.orderMessage = "Order is created"
      // error => this.orderMessage = "Error"
      
    )
  }
}
