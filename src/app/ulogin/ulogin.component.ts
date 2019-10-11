import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserlistService } from '../userlist-service.service';

@Component({
  selector: 'app-ulogin',
  templateUrl: './ulogin.component.html',
  styleUrls: ['./ulogin.component.css']
})
export class UloginComponent implements OnInit {

  loginForm: FormGroup;
  username: string;
  password: string;
  role: any;
  
  constructor(private router: Router,
    private formBuilder: FormBuilder,private signinService:UserlistService) { }

  ngOnInit() {
    window.localStorage.clear();
    this.loginForm = this.formBuilder.group({
      username: ['',[Validators.email,Validators.required]],
      password: ['',Validators.required]
    })
  }
  login() : void {
  
    if(this.username==""||this.username==null)
    {
      alert('Please enter the user name!');
      this.router.navigate(['/userlogin']);
    }
    else if(this.password==""||this.password==null)
    {
      alert('Please enter Password!');
      this.router.navigate(['/userlogin']);
    }
    else
    this.authenticateUser(this.username,this.password);
  }
  public authenticateUser(username,password)
    {
     
      
      this.signinService.authenticateUser(username,password).subscribe(data=>{
        if(data==null)
        {
          alert("Invalid Credentials");
          this.router.navigate(['/userlogin']);
        }
        else
        {
          window.localStorage.setItem("user", JSON.stringify(data));
         
         
                    this.router.navigate(['/userhome']);
        }
      })
    }
}
