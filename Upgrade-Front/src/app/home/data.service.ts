import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alumno } from './alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://localhost:31178/Upgrade-Back/api/alumnos/REST2'
  alumno : Alumno[];
  constructor(private http:HttpClient) {}
  getalumnos() : Observable<Alumno>
  {
    return this.http.post<Alumno>(this.url,{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }
}
