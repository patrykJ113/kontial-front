import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../../types/Person';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private apiUrl = 'http://localhost:8080/api/persons';

  constructor(private http: HttpClient) {}

  getPersons(): Observable<Person[]> {
    return this.http
      .get<{ id: string; name: string; year: string }[]>(this.apiUrl)
      .pipe(
        map((response) =>
          response.map((person) => ({
            id: person.id,
            name: person.name,
            date: person.year,
          }))
        )
      );
  }

  getPerson(id: string): Observable<Person> {
    return this.http
      .get<{ id: string; name: string; birthday: string }>(
        `${this.apiUrl}/${id}`
      )
      .pipe(
        map((person) => ({
          id: person.id,
          name: person.name,
          date: person.birthday,
        }))
      );
  }

  delatePerson(id: string): Observable<any[]> {
    return this.http.delete<any[]>(`${this.apiUrl}/$${id}`);
  }
}
