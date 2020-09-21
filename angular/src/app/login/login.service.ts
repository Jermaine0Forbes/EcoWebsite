import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url:string = "http://sea.io/api";
  constructor(private http:HttpClient) { }

  login(user:any) {
    const url = this.url+"/login";
     this.http.post(url,user).subscribe(data => {
       const token = JSON.stringify(data);
      localStorage.setItem("access_token", token );
      console.log(token)
     });
  }
  register(user:any) {
    const url = this.url+"/register";
     this.http.post(url,user).subscribe(data => {
        const token = JSON.stringify(data);
       localStorage.setItem("access_token", token );
       // var decoded = jwt_decode(data);
       console.log(token)
     });
     // this.http.post(url,{user},options).subscribe(data => {
     //   console.log(data)
     // });
  }
}
