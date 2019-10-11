import { Component, OnInit } from '@angular/core';
import { Users } from '../Model/users';
import { UserlistService } from '../userlist-service.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

   userlist: Users[];
  constructor(private userListService: UserlistService) 
  { }

  ngOnInit() {
  this.getAll();
  }
submit(users){
  this.userListService.block(users).subscribe(data=>
    {
      if(data)
      this.getAll();
    });
}
getAll()
{
  this.userListService.getUsers().subscribe(data=>
    {this.userlist = data;
    });
}
}
