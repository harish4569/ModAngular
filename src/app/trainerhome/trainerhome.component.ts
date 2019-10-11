import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainerhome',
  templateUrl: './trainerhome.component.html',
  styleUrls: ['./trainerhome.component.css']
})
export class TrainerhomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.authenticate();
  }

  public authenticate(){
    var login=JSON.parse(window.localStorage.getItem("user"));
    if(login==null||login.role!="mentor")
    {
      this.router.navigate(["/login"]);
    }
  }
}
