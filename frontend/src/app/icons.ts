import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faChess, faFutbol, faLaptop, faMusic, faRunning, faStar } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [ FontAwesomeModule ],
  exports: [ FontAwesomeModule ]
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faChess, faFutbol, faLaptop, faRunning, faMusic, faStar );
  }
}