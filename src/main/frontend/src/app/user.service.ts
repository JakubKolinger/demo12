import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private apiUrl = '/api/students';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}

@Injectable({ providedIn: 'root' })
export class TeacherService {
  private apiUrl = '/api/teachers';

  constructor(private http: HttpClient) {}

  getTeachers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
