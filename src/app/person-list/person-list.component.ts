import { Component } from '@angular/core';
import { PersonService } from '../service/person/person.service';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';

type Person = {
  id: string;
  name: string;
  year: number;
};

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css',
})
export class PersonListComponent {
  persons: Person[] = [];
  loading = true;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPersons().subscribe({
      next: (data) => {
        this.persons = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    });
  }
}
