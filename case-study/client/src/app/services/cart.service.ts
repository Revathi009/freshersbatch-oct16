import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public lstproducts = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  
  constructor() { }
  getProducts(){
    return this.lstproducts.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.lstproducts.next(product);
  }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.lstproducts.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.lstproducts.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.lstproducts.next(this.cartItemList);
  }
}