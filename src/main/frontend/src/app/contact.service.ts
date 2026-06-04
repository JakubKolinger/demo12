import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Contact} from './contact.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  //private apiUrl = '/api/contacts';
  private apiUrl = 'https://jakub.baprace.online/api/db/users';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }
}
