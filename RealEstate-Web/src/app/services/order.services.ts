import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private _productUrl = "https://localhost:44393/api/Order";
  constructor(private http: HttpClient,private _router:Router) { }
  public property : any ; 
  
  Getorder() {
    return this.http.get<any>(this._productUrl);
  }

}