import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Technology } from '../Model/technology';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  private techUrl = 'http://localhost:8881/technology';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }
  
  public createTech(tech: any) {
    return this.http.post<Technology>(this.techUrl, tech);
  }

  public getTech() {
    return this.http.get<Technology[]>(this.techUrl);
  }

  public findAll(): Observable<Technology[]> {
    return this.http.get<Technology[]>('http://localhost:8881/technology');
  }
  public edit(tech)
  {
    return this.http.put<Technology[]>(this.techUrl+"/"+tech.id+"/update",tech);
  }
  public deleteTech(tech) {
    return this.http.delete<Technology[]>(this.techUrl + "/"+ tech);
  }

  
}
