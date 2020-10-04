import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  host: {'[id]' : "id"},
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  id:string = "app-header";
  constructor() { }

  ngOnInit(): void {
  }

  onLogout(){
    if(localStorage.getItem("access_token")){
      localStorage.removeItem("access_token");
      localStorage.clear();
      console.log("logged out")
    }else{
      console.log("there is no token")
    }

  }
}
