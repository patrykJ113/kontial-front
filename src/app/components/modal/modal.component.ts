import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
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
import { Person } from '../../types/Person';
import { SpinnerComponent } from '../spinner/spinner.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    SvgIconComponent,
    CommonModule,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    SpinnerComponent,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() type: ModalType = 'Add';
  @Input() open = false;
  @Input() id = '';
  @Output() close = new EventEmitter<void>();
  person!: Person;
  Form: FormGroup;
  loading = false;
  isAlertOpen = false;
  success = false;
  alertMessages: string[] = [];
  deletedPersonSuccess = false

  constructor(private fb: FormBuilder, private personService: PersonService) {
    this.Form = this.fb.group({
      name: ['', Validators.required],
      birthday: ['', Validators.required],
      id: ['', [Validators.required, idValidator()]],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['id'] && this.id) {
      this.loading = true;
      this.personService.getPerson(this.id).subscribe({
        next: (data: Person) => {
          this.person = data;
          this.Form.patchValue({
            name: this.person.name,
            birthday: this.person.date,
            id: this.person.id,
          });
          this.loading = false;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  isAddForm() {
    return this.type === 'Add';
  }

  isEditForm() {
    return this.type === 'Eddit';
  }

  isDeleteForm() {
    return this.type === 'Delete';
  }

  openAllert(isSuccess: boolean) {
    if (isSuccess) {
      this.success = true;
      this.isAlertOpen = true;
    } else {
      this.success = false;
      this.isAlertOpen = true;
    }
  }

  resetAlert() {
    this.isAlertOpen = false;
    this.success = false;
    this.alertMessages = [];
  }

  hasServerError(inputName: string, errorName: string): boolean {
    return this.Form.get(inputName)?.errors?.[errorName] !== undefined;
  }

  handleErros(err: HttpErrorResponse): string[] {
    const errorMesages: string[] = [];

    if (err.error.id) {
      this.Form.get('id')?.setErrors({ invalidId: true });
      errorMesages.push(err.error.id);
    }

    if (err.error.name) {
      this.Form.get('name')?.setErrors({ invalidName: true });
      errorMesages.push(err.error.name);
    }
    if (err.error.birthday) {
      this.Form.get('birthday')?.setErrors({ invalidBirthday: true });
      errorMesages.push(err.error.birthday);
    }
    if (err.error.exists) {
      this.Form.get('id')?.setErrors({ idExists: true });
      errorMesages.push(err.error.exists);
    }

    return errorMesages;
  }

  onSubmit() {
    if (this.Form.invalid) {
      this.Form.markAllAsTouched();
      this.deletedPersonSuccess = false
      return;
    }

    this.resetAlert();
    this.loading = true;

    if (this.isAddForm()) {
      this.personService.addPerson(this.Form.value).subscribe({
        next: (response) => {
          this.alertMessages = ['Person Added Successfully'];
          this.openAllert(true);
          this.loading = false;
        },
        error: (err) => {
          this.alertMessages = err.error ? [err.error] : this.handleErros(err);
          this.openAllert(false);
          this.loading = false;
        },
      });
    }

    if (this.isEditForm()) {
      this.personService.updatePerson(this.id, this.Form.value).subscribe({
        next: (data: Person) => {
          this.alertMessages = ['Person Updated Successfully'];
          this.openAllert(true);
          this.loading = false;
        },
        error: (err) => {
          this.alertMessages = err.error ? [err.error] : this.handleErros(err);
          this.openAllert(false);
          this.loading = false;
        },
      });
    }

    if (this.isDeleteForm()) {
      this.personService.delatePerson(this.id).subscribe({
        next: (data: Person) => {
          this.deletedPersonSuccess = true;
          this.loading = false;
        },
        error: (err) => {
          console.log(err);
          this.alertMessages = err.error ? [err.error] : ['Something wen wrong ']
          this.openAllert(false);
          this.loading = false;
        },
      });
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
    this.resetAlert();
    this.close.emit();
  }
}
