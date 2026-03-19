import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
  isOpen?: boolean;
}

@Component({
  selector: 'ds-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss',
})
export class AccordionComponent {
  @Input() items: AccordionItem[] = [];
  @Input() allowMultiple: boolean = false;

  toggle(item: AccordionItem) {
    if (!this.allowMultiple) {
      // Cerrar todos los demás
      this.items.forEach(i => {
        if (i.id !== item.id) {
          i.isOpen = false;
        }
      });
    }
    item.isOpen = !item.isOpen;
  }
}
