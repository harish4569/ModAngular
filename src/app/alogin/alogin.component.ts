import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserlistService } from '../userlist-service.service';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit {
  loginForm: FormGroup;
  username: string;
  password: string;
  
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
      this.router.navigate(['/adminlogin']);
    }
    else if(this.password==""||this.password==null)
    {
      alert('Please enter Password!');
      this.router.navigate(['/adminlogin']);
    }
    else
    this.authenticateAdmin(this.username,this.password);
  }
  public authenticateAdmin(username,password)
    {
     
      
      this.signinService.authenticateAdmin(username,password).subscribe(data=>{
        if(data==null)
        {
          alert("Invalid Credentials");
          this.router.navigate(['/login']);
        }
        else
        {
          window.localStorage.setItem("user", JSON.stringify(data));
         
         
                    this.router.navigate(['/adminhome']);
        }
      })
    }

}
