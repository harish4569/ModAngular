import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  

  constructor(private router:Router) { }

  ngOnInit() {
    
    this.authenticate();
  }
public authenticate(){
  var login=JSON.parse(window.localStorage.getItem("user"));
  if(login==null||login.role!="user")
  {
    this.router.navigate(["/login"]);
  }
}
}
