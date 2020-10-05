import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login/login.service"
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    form = new FormGroup({
    firstName : new FormControl("John"),
    lastName : new FormControl("B"),
    email : new FormControl("johnB@gmail.com"),
    password :new FormControl("password")
  })

  constructor(private service:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const user = this.form.value;
    this.service.register(user)
    // console.log(this.form.value)
  }
}
