import { Injectable } from '@angular/core';
import { Users } from '../Model/users';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class DataService {
  
  private usersUrl = 'http://localhost:8881/users/harish';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});
 
  constructor(private http: HttpClient) { }
 
  public createUser(user: any) {
    return this.http.post<Users>(this.usersUrl, user);
  }
 
  // create(users: Users): Promise<Users> {
  //   return this.http
  //     .post(this.usersUrl, JSON.stringify(users), {})
  //     .toPromise()
  //     .then(res => res.json() as Users)
  //     .catch(this.handleError);
  // }  handleError(handleError: any): Promise<Users> {
  //   throw new Error("Method not implemented.");
  // }
}
