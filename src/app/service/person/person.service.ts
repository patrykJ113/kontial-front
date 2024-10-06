import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../../types/Person';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AddPersonResponse } from '../../types/AddPersonResponse';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  getPersons(): Observable<Person[]> {
    return this.http
      .get<Person[]>(environment.apiUrl)
      .pipe(
        map((response) =>
          response.map((person) => ({
            id: person.id,
            name: person.name,
            birthday: person.birthday,
          }))
        )
      );
  }

  getPerson(id: string): Observable<Person> {
    return this.http
      .get<Person>(
        `${environment.apiUrl}/${id}`
      )
      .pipe(
        map((person) => ({
          id: person.id,
          name: person.name,
          birthday: person.birthday,
        }))
      );
  }

  addPerson(person: Person): Observable<HttpResponse<AddPersonResponse>> {
    return this.http.post<AddPersonResponse>(`${environment.apiUrl}`, person, {
      observe: 'response',
    });
  }

  updatePerson(id: string, updatedPerson: Person): Observable<Person> {
    return this.http.put<Person>(`${environment.apiUrl}/${id}`, updatedPerson);
  }

  delatePerson(id: string): Observable<Person> {
    return this.http.delete<Person>(`${environment.apiUrl}/${id}`);
  }
}
