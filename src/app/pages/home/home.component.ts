import { Component } from '@angular/core';
import { PersonListComponent } from '../../components/person-list/person-list.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { ButtonComponent } from '../../components/button/button.component';
import { PersonService } from '../../service/person/person.service';
import { ModalComponent } from '../../components/modal/modal.component';
import { ModalType } from '../../types/ModalType';
import { Person } from '../../types/Person';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PersonListComponent,
    SearchBarComponent,
    ButtonComponent,
    ModalComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  persons: Person[] = [];
  loading = true;
  filteredPersons: Person[] = [];
  modalType: ModalType = 'Add';
  modalOpen = false;
  modalId = '';

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPersons().subscribe({
      next: (data) => {
        this.persons = data;
        this.filteredPersons = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    });
  }

  onSearch(query: string) {
    this.filteredPersons = this.persons.filter((person) =>
      person.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  openModal({ type, id }: { type: ModalType; id?: string }) {
    this.modalType = type;
    this.modalId = id ?? '';
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }
}
