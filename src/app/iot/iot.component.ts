import { Component, OnInit } from '@angular/core';
import { Technology } from '../Model/technology';
import { TechnologyService } from '../Service/technology.service';

@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.css']
})
export class IotComponent implements OnInit {

  techlist: Technology[];
  constructor(private techService: TechnologyService) 
  { }

  ngOnInit() {
  this.getAll();
  }
submit(tech){
  this.techService.findAll().subscribe(data=>
    {
      if(data)
      this.getAll();
    });
}
getAll()
{
  this.techService.getTech().subscribe(data=>
    {this.techlist = data;
    });
  }

}
