import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuth } from '../Models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  API_URL: string = 'http://localhost:3000';


  constructor(private http: HttpClient) { }

  
  signup(user: any): Observable<IAuth> {
    return this.http.post<IAuth>(`${this.API_URL}/signup`, user)
  }
  signin(user: any): Observable<IAuth> {
    return this.http.post<IAuth>(`http://localhost:3000/signin`, user)
  }
  
  
}
