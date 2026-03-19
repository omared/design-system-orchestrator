import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class CardComponent {
  @Input() variant: 'flat' | 'elevated' | 'outlined' = 'elevated';
  @Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';
}
