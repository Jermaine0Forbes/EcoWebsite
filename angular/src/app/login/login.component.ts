import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login/login.service"
import { FormControl, FormGroup } from '@angular/forms';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form  = new FormGroup({
      email: new FormControl("JForbes"),
      password: new FormControl("password")
    })

  constructor(private service:LoginService) { }

  ngOnInit(): void {
    // const token = JSON.parse(localStorage.getItem("access_token"));
    // const data = jwt_decode(token);
    // console.log(data)
  }

  onSubmit(){
    const user = this.form.value;
    this.service.login(user)
  }

}
