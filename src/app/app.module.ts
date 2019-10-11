import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';

import { LoginsComponent } from './logins/logins.component';
import { UloginComponent } from './ulogin/ulogin.component';
import { MloginComponent } from './mlogin/mlogin.component';
import { AloginComponent } from './alogin/alogin.component';
import { SignupComponent } from './signup/signup.component';
import { FullstackComponent } from './fullstack/fullstack.component';
import { WebComponent } from './web/web.component';
import { CloudComponent } from './cloud/cloud.component';
import { IotComponent } from './iot/iot.component';
import { TrainerhomeComponent } from './trainerhome/trainerhome.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { CompletedTrainingComponent } from './completed-training/completed-training.component';
import { SkillComponent } from './skill/skill.component';
import { TcurrentTrainingComponent } from './tcurrent-training/tcurrent-training.component';
import { TcompletedTrainingComponent } from './tcompleted-training/tcompleted-training.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserslistComponent } from './userslist/userslist.component';
import { OngoingComponent } from './ongoing/ongoing.component';
import { PaymentsComponent } from './payments/payments.component';
import { CmTrainingService } from './cmtraining.service';
import { HttpClientModule } from '@angular/common/http';
import { UserlistService } from './userlist-service.service';
import { MentorSingupComponent } from '../app/mentor-singup/mentor-singup.component';
import { DataService } from './Service/data-service.service';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TechnologyService } from './Service/technology.service';
import { AdminaddTechComponent } from './adminadd-tech/adminadd-tech.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserhomeComponent,
   
    LoginsComponent,
    UloginComponent,
    MloginComponent,
    AloginComponent,
    SignupComponent,
    
    FullstackComponent,
    WebComponent,
    CloudComponent,
    IotComponent,
    TrainerhomeComponent,
    CurrentTrainingComponent,
    CompletedTrainingComponent,
    SkillComponent,
    TcurrentTrainingComponent,
    TcompletedTrainingComponent,
    AdminhomeComponent,
    UserslistComponent,
    OngoingComponent,
    PaymentsComponent,
    MentorSingupComponent,
    TechnologiesComponent,
    AdminaddTechComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CmTrainingService,UserlistService,DataService,TechnologyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
