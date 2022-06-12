import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IWork } from '../Models/work';
@Injectable({
  providedIn: 'root'
})
export class WorkService {
  API_URL: string = 'http://localhost:3000/work';


  constructor(private http: HttpClient) { }

  getWorks(): Observable<IWork[]>{
    return this.http.get<IWork[]>(`${this.API_URL}`)
  }
  getWork(id: number): Observable<IWork>{
    return this.http.get<IWork>(`${this.API_URL}/${id}`)
  }
  removeWork(id: number) : Observable<IWork>{
    return this.http.delete<IWork>(`${this.API_URL}/${id}`)
  }
  addWork(work: any): Observable<IWork> {
    return this.http.post<IWork>(`${this.API_URL}`, work)
  }
  updateWork(id: number, work:any): Observable<IWork>{
    return this.http.put<IWork>(`${this.API_URL}/${id}`, work)
  }
}
