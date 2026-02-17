import { Component, signal } from '@angular/core';
import { Button } from './components/button/button';

@Component({
  selector: 'app-root',
  imports: [Button],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('design-system-orchestrator');
}
