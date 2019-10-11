import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Training } from '../app/Model/training';
import { Observable } from 'rxjs';


 
@Injectable()
export class CmTrainingService {
 
  private trainingUrl: string;
 
  constructor(private http: HttpClient) {
    this.trainingUrl = 'http://localhost:8092/training';
  }
 
  public findAll(): Observable<Training[]> {
    return this.http.get<Training[]>('http://localhost:8092/training');
  }
}