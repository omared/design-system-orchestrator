import { Component, Input } from '@angular/core';

@Component({
  selector: 'ds-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() variant: 'primary' | 'secondary' | 'accent' = 'primary';
  @Input() disabled = false;
}
