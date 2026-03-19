
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Tab {
  id: string;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'ds-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
})
export class TabsComponent {
  @Input() tabs: Tab[] = [];
  @Input() activeTab: string = '';
  @Input() variant: 'line' | 'pill' = 'line';
  @Output() tabChange = new EventEmitter<string>();

  ngOnInit() {
    if (!this.activeTab && this.tabs.length > 0) {
      this.activeTab = this.tabs[0].id;
    }
  }

  selectTab(tab: Tab) {
    if (!tab.disabled) {
      this.activeTab = tab.id;
      this.tabChange.emit(tab.id);
    }
  }
}
