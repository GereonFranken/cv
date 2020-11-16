import { Component } from '@angular/core';
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { faChess, faFutbol, faLaptop, faMusic, faRunning, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cv';
  constructor(private library: FaIconLibrary) {
    this.library.addIcons(faChess, faFutbol, faLaptop, faRunning, faMusic, faStar );
  }

}
