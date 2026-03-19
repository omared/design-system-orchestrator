import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
})
export class ToastComponent implements OnInit {
  @Input() variant: 'info' | 'success' | 'warning' | 'error' = 'info';
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() duration: number = 5000; // 5 segundos por defecto
  @Input() dismissible: boolean = true;
  @Output() dismiss = new EventEmitter<void>();

  ngOnInit() {
    if (this.duration > 0) {
      setTimeout(() => {
        this.onDismiss();
      }, this.duration);
    }
  }

  onDismiss() {
    this.dismiss.emit();
  }
}
