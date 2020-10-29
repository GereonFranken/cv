import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { faChess, faFutbol, faLaptop, faHeartbeat, faMusic } from '@fortawesome/free-solid-svg-icons';

export enum Passion {
  none = '',
  chess = 'Chess', 
  gaming = 'Gaming',
  soccer = 'Soccer',
  fitness = 'Fitness',
  music = 'Music',
}
@Component({
  selector: 'app-passions',
  templateUrl: './passions.component.html',
  styleUrls: ['./passions.component.scss']
})

export class PassionsComponent implements OnInit {

  passion: Passion = Passion.none;
  // len(Passion) -1 is num of all hobbies/ number of sides of the created polygon
  numSides = Object.keys(Passion).length -1;
  // (numSides -2) * 180 is the formula for the sum of angles in a polygon
  anglesSum = (this.numSides - 2) * 180;
  angle = 180 - this.anglesSum / this.numSides;
  polygonDistance = 170 //px
  icons = [
    {
      'iconName': 'chess',
      'passion': 'Chess',
    },
    {
      'iconName': 'futbol',
      'passion': 'Soccer',
    },
    {
      'iconName': 'laptop',
      'passion': 'Gaming & Programming',
    },
    {
      'iconName': 'heartbeat',
      'passion': 'Fitness',
    },
    {
      'iconName': 'music',
      'passion': 'Music',
    },
  ]

  constructor(private library: FaIconLibrary) {
    this.library.addIcons(faChess, faFutbol, faLaptop, faHeartbeat, faMusic);
  }

  calculateVector(angle: number) {
    // vx of vector v is calculated by |v| * cos(angle) + half of the icon width to center it
    // vy of vector v is calculated by |v| * sin(angle) + half of the icon height to center it
    return {x: (this.polygonDistance * Math.sin(angle*Math.PI/180) - 21),
            y: (-(this.polygonDistance * Math.cos(angle*Math.PI/180) + 21))};
  }

  ngOnInit(): void {;
  }

  handleIconClick(clickedPassion: Passion) {
    this.passion = clickedPassion;
  }
}
