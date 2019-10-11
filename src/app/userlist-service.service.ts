import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './Model/users';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserlistService {
 

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8881/users/harish';
  

  public getUsers() {
    return this.http.get<Users[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }
 
  public block(user) {
    return this.http.put<Users>(this.userUrl + "/add/",user);
    
  }
  public createUser(user) {
    return this.http.post(this.userUrl, user);
  }
  public authenticateUser(userName: any, password: any) {
    return this.http.get<Users[]>(this.userUrl+"/"+userName+"/"+password+"/user");
  }
  public authenticateMentor(userName: any, password: any) {
    return this.http.get<Users[]>(this.userUrl+"/"+userName+"/"+password+"/mentor");
  }
  public authenticateAdmin(userName: any, password: any) {
    return this.http.get<Users[]>(this.userUrl+"/"+userName+"/"+password+"/admin");
  }
 

}
