import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { ButtonComponent } from '../button/button.component';
import { ModalType } from '../../types/ModalType';
import { Person } from '../../types/Person';

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
  @Output() open = new EventEmitter<{ type: ModalType; id: string }>();

  onClick(type: ModalType, id: string) {
    this.open.emit({
      type,
      id,
    });
  }
}
