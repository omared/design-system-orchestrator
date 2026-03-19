import { Component, Input } from '@angular/core';

@Component({
  selector: 'ds-badge',
  standalone: true,
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
})
export class BadgeComponent {
  @Input() variant: 'default' | 'accent' | 'success' | 'warning' | 'error' = 'default';
  @Input() size: 'sm' | 'md' = 'md';
}
