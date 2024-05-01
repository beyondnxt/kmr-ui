import { Component, HostListener } from '@angular/core';
export let globalShareBaseOrigin: string;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    globalShareBaseOrigin = window.location.origin;
  }
}
