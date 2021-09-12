import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient,
    private router: Router) { }

    //fetch all products from backend 
    getAllProducts(){
      return this.http.get(this.SERVER_URL + '/products');
    }

    getProductModelServe(): Observable<any> {
      return this.http.get("http://localhost:3000/api/products")
      
    }


}
