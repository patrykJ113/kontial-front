import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  handleFocus() {
    this.inputVocused = !this.inputVocused;
  }
}
