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
     this.http.get(url,user).subscribe(data => {
       console.log(data)
     });
  }
  register(user:any) {
    const url = this.url+"/register";
    const options = {
      headers : new HttpHeaders({
        "Content-Type" : "application/json"
      }),
      withCredentials: true,
    }
    const params = new HttpParams().set("username", user.username)
    // console.log(url)
    // console.log(params)
     this.http.post(url,user).subscribe(data => {
       // localStorage.setItem("access_token", data);
       var decoded = jwt_decode(data);
       console.log(decoded)
     });
     // this.http.post(url,{user},options).subscribe(data => {
     //   console.log(data)
     // });
  }
}
