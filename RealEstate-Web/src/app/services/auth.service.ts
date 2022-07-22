import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private _registerUrl = "https://localhost:44393/api/Login/register";
  private _loginUrl = "https://localhost:44393/api/Login/login";

//Azure
 //private _registerUrl = "https://zagade123.azurewebsites.net/api/Login/register";
 //private _loginUrl = "https://zagade123.azurewebsites.net/api/Login/login";

  constructor(private http: HttpClient,private _router:Router) { }

  registerUser(user: any) {
    return this.http.post<any>(this._registerUrl, user);
  }
  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user);
  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['/home1']);
  }

}