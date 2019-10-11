import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.authenticate();
  }

  public authenticate(){
    var login=JSON.parse(window.localStorage.getItem("user"));
    if(login==null||login.role!="admin")
    {
      this.router.navigate(["/login"]);
    }
  }
}
