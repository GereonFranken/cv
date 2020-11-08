import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { faChess, faFutbol, faLaptop, faMusic, faRunning } from '@fortawesome/free-solid-svg-icons';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';
import { delay } from 'rxjs-compat/operator/delay';

export enum Passion {
  none = '',
  chess = 'Chess', 
  computer = 'Gaming & Programming',
  soccer = 'Soccer',
  fitness = 'Fitness',
  music = 'Music',
}
@Component({
  selector: 'app-passions',
  templateUrl: './passions.component.html',
  styleUrls: ['./passions.component.scss'],
  animations: [
    trigger('buttonEntry', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1.5s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('.5s', style({ transform: 'translateY(-100%)', opacity: 0.2 }))
      ])
    ])
  ]
})

export class PassionsComponent implements OnInit {

  passion: Passion = Passion.none;

  // len(Passion) -1 is num of all hobbies/ number of sides of the created polygon
  numSides = Object.keys(Passion).length -1;
  // (numSides -2) * 180 is the formula for the sum of angles in a polygon
  anglesSum = (this.numSides - 2) * 180;
  angle = 180 - this.anglesSum / this.numSides;
  polygonDistance = 190 //px
  isIconClicked: 'default' | 'iconClicked' | 'otherIconClicked' = 'default';

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
      'iconName': 'running',
      'passion': 'Fitness',
    },
    {
      'iconName': 'music',
      'passion': 'Music',
    },
  ]

  constructor(private library: FaIconLibrary) {
    this.library.addIcons(faChess, faFutbol, faLaptop, faRunning, faMusic);
  }

  calculateVector(angle: number) {
    // vx of vector v is calculated by |v| * cos(angle) + half of the icon width to center it
    // vy of vector v is calculated by |v| * sin(angle) + half of the icon height to center it
    return {x: (this.polygonDistance * Math.sin(angle*Math.PI/180) - 21),
            y: (-(this.polygonDistance * Math.cos(angle*Math.PI/180) + 21))};
  }

  ngOnInit(): void { }

  handleIconClick(clickedPassion: Passion) {
    this.passion = clickedPassion;
  }

  transformIcon(newAngle: {x: number,y: number}, passion: Passion, iterationCtr: number) {
    if (this.passion === '') {
      return 'translateX('+ newAngle.x +'px) translateY('+ newAngle.y +'px)';
    } else if (this.passion === passion) {
      return 'translateX('+ -this.polygonDistance +'px) translateY('+ -this.polygonDistance +'px)';
    } else {
      return 'translateX('+ this.polygonDistance +'px) translateY('+ ((iterationCtr*62)-(Object.keys(Passion).length/2*42)) +'px)'
    }
  }
}
