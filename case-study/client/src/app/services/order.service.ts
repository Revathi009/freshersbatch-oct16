import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from './cart.service';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http: HttpClient) { }

   public order: any;

    submitOrder(body:any){
      return this._http.post('http://localhost:5000/api/order', body, {
        observe:'body'
      })
    }

    getOrder()
    {
        return this.order.slice();
    }

 
    addToOrder(orderitems: any)
      {
          this.order.push(orderitems);
      }
}
