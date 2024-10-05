import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { ButtonComponent } from '../button/button.component';
import { ModalType } from '../../types/ModalType';
import { Person } from '../../types/Person';
import {
  trigger,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, ButtonComponent],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css',
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate(
          '350ms ease-in',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '350ms ease-in',
          style({ opacity: 0, transform: 'translateY(-10px)' })
        ),
      ]),
    ]),
  ],
})
export class PersonListComponent {
  @Input() persons: Person[] = [];
  @Input() loading = true;
  @Output() open = new EventEmitter<{ type: ModalType; id: string }>();

  onClick(type: ModalType, id: string) {
    this.open.emit({
      type,
      id,
    });
  }
}
