import { Component } from '@angular/core';
import { LandingComponent } from './pages/landing/landing';

@Component({
  selector: 'app-root',
  imports: [LandingComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App { }
