import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('backgroundMovement', [
      transition(':enter', [
        style({ position: 'absolute' }),
        animate('20s', style({ transform: 'translateY(50%) scale(2)', 'z-index': -11})),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'cv';
}
