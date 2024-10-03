import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [SvgIconComponent, CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  inputVocused = false;

  @Output() searchEvent = new EventEmitter<string>();

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.searchEvent.emit(value);
  }

  handleFocus() {
    this.inputVocused = !this.inputVocused;
  }
}
