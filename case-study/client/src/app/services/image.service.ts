import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private _http: HttpClient) {}

    sub(body:any){
      return this._http.post('http://localhost:3000/upload', body, {
        observe:'body'
      })
   }

}