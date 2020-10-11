import { Component, OnInit } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faChess } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hobbies',
  templateUrl: './passions.component.html',
  styleUrls: ['./passions.component.scss']
})
export class PassionsComponent implements OnInit {

  constructor(private library: FaIconLibrary) {
    this.library.addIcons(faChess);
  }

  ngOnInit(): void { }

  /**
   * Fußball
   * Fitness
   * Zocken
   * Schach
   * Piano/ Music
   */

}
