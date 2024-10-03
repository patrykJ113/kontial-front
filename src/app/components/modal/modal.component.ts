import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { idValidator } from '../../validators/idValidator';
import { ModalType } from '../../types/ModalType';
import { PersonService } from '../../service/person/person.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    SvgIconComponent,
    CommonModule,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() type: ModalType = 'Add';
  @Input() open = false;
  @Input() id = '';
  @Output() close = new EventEmitter<void>();
  Form: FormGroup;

  constructor(private fb: FormBuilder, private personService: PersonService) {
    this.Form = this.fb.group({
      name: ['', Validators.required],
      birthday: ['', Validators.required],
      id: ['', [Validators.required, idValidator()]],
    });
  }

  onSubmit() {
    if (this.Form.invalid) {
      this.Form.markAllAsTouched();
    }
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.Form.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

  startWithLetter() {
    return this.Form.get('id')?.errors?.['startWithLetter'];
  }
  hasFourDigits() {
    return this.Form.get('id')?.errors?.['hasFourDigits'];
  }
  isFiveCharLong() {
    return this.Form.get('id')?.errors?.['length'];
  }

  closeModal() {
    this.Form.get('name')?.setValue('');
    this.Form.get('name')?.markAsUntouched();

    this.Form.get('birthday')?.setValue('');
    this.Form.get('birthday')?.markAsUntouched();

    this.Form.get('id')?.setValue('');
    this.Form.get('id')?.markAsUntouched();
    this.close.emit();
  }
}
