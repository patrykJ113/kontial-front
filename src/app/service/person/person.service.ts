import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private apiUrl = 'http://localhost:8080/api/persons';

  constructor(private http: HttpClient) {}

  getPersons(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPerson(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/$${id}`);
  }

  delatePerson(id: string): Observable<any[]> {
    return this.http.delete<any[]>(`${this.apiUrl}/$${id}`);
  }
}
