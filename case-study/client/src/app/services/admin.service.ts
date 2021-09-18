import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { Admin } from './admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  selectedProduct: Admin;
  products: Admin[];
  readonly baseURL = 'http://localhost:3000/api/products';
  constructor(private http: HttpClient) { }

  postProduct(prod: Admin) {
    return this.http.post(this.baseURL, prod);
  }

  getProductList() {
    return this.http.get(this.baseURL);
  }

  putProduct(prod: Admin) {
    let id:string="";
    if(typeof((prod._id))=='undefined')
    {
    id="";
    }
    else
    {
      id=prod._id;
    }
    return this.http.put(this.baseURL , prod);
  }

  deleteProduct(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  uploadImage(prod: Admin){
    return this.http.post(this.baseURL, prod);
  }

  ngOnInit(){
  }



}

