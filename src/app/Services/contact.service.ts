import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContact } from '../Models/contact';
import { IPost } from '../Models/post';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  API_URL: string = 'http://localhost:3000/contact';


  constructor(private http: HttpClient) { }

  getContacts(): Observable<IContact[]>{
    return this.http.get<IContact[]>(`${this.API_URL}`)
  }
  getContact(id: number): Observable<IContact>{
    return this.http.get<IContact>(`${this.API_URL}/${id}`)
  }
  removeContact(id: number) : Observable<IContact>{
    return this.http.delete<IContact>(`${this.API_URL}/${id}`)
  }
  addContact(post: any): Observable<IContact> {
    return this.http.post<IContact>(`${this.API_URL}`, post)
  }
  updateContact(post: IContact): Observable<IContact> {
    return this.http.put<IContact>(`${this.API_URL}/${post.id}`, post);
  }
}
