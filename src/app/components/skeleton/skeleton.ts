import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-skeleton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton.html',
  styleUrl: './skeleton.scss',
})
export class SkeletonComponent {
  @Input() variant: 'text' | 'rect' | 'circle' = 'rect';
  @Input() width: string = '100%';
  @Input() height: string = '16px';
  @Input() borderRadius: string = '';
}
