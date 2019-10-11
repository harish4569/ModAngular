import { Component, OnInit } from '@angular/core';
import { Users } from '../Model/users';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Service/data-service.service';

@Component({
  selector: 'app-mentor-singup',
  templateUrl: './mentor-singup.component.html',
  styleUrls: ['./mentor-singup.component.css']
})
export class MentorSingupComponent implements OnInit {

  user=new Users;
  submitted=false;
  loginForm: FormGroup;
  mentorRegForm: FormGroup;
  constructor(private router: Router,
    private formBuilder: FormBuilder,private dataService:DataService) { }

    createUser(): void {
      this.submitted = true;
    if(this.mentorRegForm.invalid)
    // return;
    alert("InvalidForm");
    else{
      this.dataService.createUser(this.mentorRegForm.value)
          .subscribe( data => {
            alert("User Registered successfully.");
            this.router.navigate(['/userlogin']);
          });
  
    }}
    ;

  ngOnInit() {
    window.localStorage.clear();
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    })
    this.mentorRegForm = this.formBuilder.group({
      userName: ['',Validators.required],
      password: ['',Validators.required],
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      //confirmPasword: ['',Validators.required],
      role:['mentor'],
      technology:['',Validators.required],
      yearsOfExperience:['',Validators.required],
      starttime:['',Validators.required],
      endtime:['',Validators.required]
    })
  }
  get f(){return this.mentorRegForm.controls;}
 
}
