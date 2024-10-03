import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { ButtonComponent } from '../button/button.component';

type Person = {
  id: string;
  name: string;
  year: number;
};

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, ButtonComponent],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css',
})
export class PersonListComponent {
  @Input() persons: Person[] = [];
  @Input() loading = true;
}
