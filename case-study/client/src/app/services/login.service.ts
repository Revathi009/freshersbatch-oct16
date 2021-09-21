import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  login(body:any){
    return this._http.post('http://localhost:4000/user/login', body, {
      observe:'body'
  
  })
  }

  getUserName() {
    return this._http.get('http://localhost:4000/user/username', {
      observe: 'body',      
      params: new HttpParams().append('token', localStorage.getItem('token') || '{}')
    });
  }
}
