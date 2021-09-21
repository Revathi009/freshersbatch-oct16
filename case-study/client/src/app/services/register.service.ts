import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http: HttpClient) { }

  submitRegister(body:any){
    return this._http.post('http://localhost:4000/user/register', body, {
      observe:'body'
    })
  }

  Register(body:any){
    return this._http.post('http://localhost:3000/admin/register', body, {
      observe:'body'
    })
  }


}
