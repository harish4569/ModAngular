import { NgModule, ɵSWITCH_COMPILE_NGMODULE__POST_R3__ } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { LoginsComponent } from './logins/logins.component';
import { UloginComponent } from './ulogin/ulogin.component';
import { MloginComponent } from './mlogin/mlogin.component';
import { Alert } from 'selenium-webdriver';
import { AloginComponent } from './alogin/alogin.component';
import { SignupComponent } from './signup/signup.component';
import { FullstackComponent } from './fullstack/fullstack.component';
import { WebComponent } from './web/web.component';
import { CloudComponent } from './cloud/cloud.component';
import { IotComponent } from './iot/iot.component';
import { TrainerhomeComponent } from './trainerhome/trainerhome.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { CompletedTrainingComponent } from './completed-training/completed-training.component';
import { TcompletedTrainingComponent } from './tcompleted-training/tcompleted-training.component';
import { TcurrentTrainingComponent } from './tcurrent-training/tcurrent-training.component';
import { SkillComponent } from './skill/skill.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserslistComponent } from './userslist/userslist.component';
import { OngoingComponent } from './ongoing/ongoing.component';
import { PaymentsComponent } from './payments/payments.component';
import { MentorSingupComponent } from './mentor-singup/mentor-singup.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { AdminaddTechComponent } from './adminadd-tech/adminadd-tech.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'userhome',
    component:UserhomeComponent
  },
  {
    path:'addtech',
    component:AdminaddTechComponent
  },
  {
    path:'trainerhome',
    component:TrainerhomeComponent
  },
  
  {
    path:'login',
    component:LoginsComponent
  },
  {
    path:'userlogin',
    component:UloginComponent
  },
  {
    path:'mentorlogin',
    component:MloginComponent
  },
  {
    path:'adminlogin',
    component:AloginComponent
  },
  {
    path:'mentor',
    component: MentorSingupComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  
  {
    path:'fsd',
    component:FullstackComponent
  }
  ,
  {
    path:'frontend',
    component:WebComponent
  }
  ,
  {
    path:'cloud-computing',
    component:CloudComponent
  }
  ,
  {
    path:'iot',
    component:IotComponent
    },
    {
      path:'current_training',
      component:CurrentTrainingComponent

    },
    {
      path:'completed_training',
      component:CompletedTrainingComponent
    },
  {
    path:'Tcompleted-training',
    component:TcompletedTrainingComponent
  },
  {
    path:'Tcurrent-training',
    component:TcurrentTrainingComponent
  },
  {
    path:'skill',
    component:SkillComponent
  },
  {
    path:'adminhome',
    component:AdminhomeComponent
  },
  {
    path:'users',
    component:UserslistComponent
  },
  {
    path:'technologies',
    component:TechnologiesComponent
  },
  {
    path:'active-training',
    component:OngoingComponent
  },
  {
    path:'transactions',
    component:PaymentsComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
 
})
export class AppRoutingModule { }
