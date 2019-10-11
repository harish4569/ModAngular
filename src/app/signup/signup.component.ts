import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../Model/users';
import { DataService } from '../Service/data-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user=new Users;
  submitted=false;
  loginForm: FormGroup;
  registerForm: FormGroup;
  constructor(private router: Router,
    private formBuilder: FormBuilder,private dataService:DataService) { }

    createUser(): void {
      this.submitted = true;
    if(this.registerForm.invalid)
    // return;
    alert("InvalidForm");
    else{
      this.dataService.createUser(this.registerForm.value)
          .subscribe( data => {
            alert("User Registered successfully.");
            this.router.navigate(['/userlogin']);
          });
  
    }}
    ;

  ngOnInit() {
    // window.localStorage.clear();
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    })
    this.registerForm = this.formBuilder.group({
      userName: ['',Validators.required],
      password: ['',Validators.required],
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      // confirmPasword: ['',Validators.required],
      role:['user']
    })
  }

  get f(){return this.registerForm.controls;}
  submit(){
    
    this.router.navigate(['/login']);
  }

}
