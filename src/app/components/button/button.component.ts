import { Component, Input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [SvgIconComponent, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() danger = false;
  @Input() showIcon = false;
  @Input() label = 'Add New';
  @Input() type: 'default' | 'outlined' | 'circle' = 'default';

  isDefaultDanger() {
    return this.type === 'default' && this.danger;
  }

  isOutlinedDanger() {
    return this.type === 'outlined' && this.danger;
  }

  isDefault() {
    return this.type === 'default';
  }

  isOutlined() {
    return this.type === 'outlined';
  }

  isCircle() {
    return this.type === 'circle';
  }

  getButtonClasses() {
    if (this.isDefaultDanger()) {
      return 'bg-red-A400 hover:bg-red-700 active:bg-red-900 text-white white__icon';
    }
    if (this.isOutlinedDanger()) {
      return 'border border-solid border-gray-400 text-red-A400 hover:bg-red-50 active:bg-red-100 red__icon';
    }
    if (this.isDefault()) {
      return 'bg-indigo-A200 hover:bg-indigo-700 active:bg-indigo-900 text-white white__icon';
    }
    if (this.isOutlined()) {
      return 'border border-solid border-gray-400 text-indigo-A200 hover:bg-indigo-50 active:bg-indigo-100 indigo__icon';
    }
    if (this.isCircle()) {
      return 'bg-indigo-A200 hover:bg-indigo-700 active:bg-indigo-900 !px-3 !py-3 white__icon';
    }
    return '';
  }
}
