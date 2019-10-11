import { Component, OnInit } from '@angular/core';
import { Technology } from '../Model/technology';
import { TechnologyService } from '../Service/technology.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
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
remove(tech){
  
  this.techService.deleteTech(tech.id).subscribe(data=>
    {
      this.techlist=data;
    });
}
edit(tech){
  this.techService.edit(tech).subscribe(data=>
    {
      this.techlist = data;
      alert("Updated Succesfully");
    });
}
add(tech){
  this.techService.createTech(tech).subscribe(data=>
    {
      if(data)
      this.getAll();
    });
}
}
