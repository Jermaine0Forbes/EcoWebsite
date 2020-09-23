import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // public  token = JSON.parse(localStorage.getItem("access_token"));
  public jwtHelper: JwtHelperService = new JwtHelperService();

  constructor() { }

  getToken() {
    return JSON.parse(localStorage.getItem("access_token")) || null;
  }
  isAuthenticated():boolean{
    const token = this.getToken();
    if(token){
      console.log( this.jwtHelper.getTokenExpirationDate(token))
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }
}
