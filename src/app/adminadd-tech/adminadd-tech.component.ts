import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Technology } from '../Model/technology';
import { Router } from '@angular/router';
import { TechnologyService } from '../Service/technology.service';

@Component({
  selector: 'app-adminadd-tech',
  templateUrl: './adminadd-tech.component.html',
  styleUrls: ['./adminadd-tech.component.css']
})
export class AdminaddTechComponent implements OnInit {
  tech=new Technology;
  submitted=false;
  techForm: FormGroup;
  
  constructor(private router: Router,
    private formBuilder: FormBuilder,private techService:TechnologyService) { }

    createTech(): void {
      this.submitted = true;
    if(this.techForm.invalid)
    // return;
    alert("InvalidForm");
    else{
      this.techService.createTech(this.techForm.value)
          .subscribe( data => {
            console.log(data);
            alert("Technology added successfully.");
            this.router.navigate(['/adminhome']);
            
          });
  
    }}
    ;

  ngOnInit() {
    // window.localStorage.clear();
    
    this.techForm = this.formBuilder.group({
      technology: ['',Validators.required],
      experience: ['',Validators.required],
      mentorname: ['',Validators.required],
      email: ['',Validators.required],
      // confirmPasword: ['',Validators.required],
      fees:['',Validators.required],
      comm:['',Validators.required],
      //starttime:['',Validators.required],
     // endtime:['',Validators.required]
    })
  }

  get f(){return this.techForm.controls;}
}
