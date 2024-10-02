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
      return 'bg-red-A400 hover:bg-red-700 active:bg-red-900 text-white white-plus';
    }
    if (this.isOutlinedDanger()) {
      return 'border border-solid border-gray-400 text-red-A400 hover:bg-red-50 active:bg-red-100 red-plus';
    }
    if (this.isDefault()) {
      return 'bg-deepPurple-A200 hover:bg-deepPurple-700 active:bg-deepPurple-900 text-white white-plus';
    }
    if (this.isOutlined()) {
      return 'border border-solid border-gray-400 text-deepPurple-A200 hover:bg-deepPurple-50 active:bg-deepPurple-100 deep-purple-plus';
    }
    if (this.isCircle()) {
      return 'bg-deepPurple-A200 hover:bg-deepPurple-700 active:bg-deepPurple-900 !px-3 !py-3 white-plus';
    }
    return '';
  }
}
