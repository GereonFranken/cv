import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { faChess, faFutbol, faLaptop, faMusic, faRunning } from '@fortawesome/free-solid-svg-icons';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

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
        style({ opacity: 1 }),
        animate('.5s', style({ opacity: 0, transform: 'translateY(-50%)' }))
      ]),
      transition('* => *', [
        animate('1s')
      ]),
    ])
  ]
})

export class PassionsComponent implements OnInit {

  passion: Passion = Passion.none;
  myEnum: typeof Passion = Passion;
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

  contents = {
    chess: ['Elo:1600 (approximated)', 'Favorite Human Player:Magnus Carlsen & Bobby Fischer', 'Favorite Engine:Alphazero',
      'Favorite Opening:Ruy Lopez variations as white & Berlin Defense as black'],
    soccer: ['Played for: 10 years', 'Position: Striker', `Devision:So low that the referee usually spends more time on the 
      middle line than not on it`],
    computer: ['Main Uses:Programming, Gaming, Music', `Tool for:Everything. From communication with friends
      to learning on my own.`],
    fitness: ['Main sports:Soccer, Gym', 'Other sports:Table Tennis, Badminton, Volleyball',
      'How:Primarily playing with friends. Fitness while spending time together.'],
    music: ['Instrument:Piano', 'Played for:10 years', 'Favorite Genre:Rap,EDM'],
  };

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

  getPassion(passion: Passion) {
    return Object.keys(Passion).filter((x) => Passion[x] == passion)[0];
  }

  handleIconClick(clickedPassion: Passion) {
    this.passion = clickedPassion;
  }

  transformIcon(newAngle: {x: number,y: number}, passion: Passion, iterationCtr: number) {
    if (this.passion === '') {
      return 'translateX('+ newAngle.x +'px) translateY('+ newAngle.y +'px)';
    } else if (this.passion === passion) {
      return 'translateX('+ -this.polygonDistance +'px) translateY('+ -this.polygonDistance +'px)';
    } else {
      const xTranslation = (70 - document.getElementById('icon' + iterationCtr).clientWidth) / 2 + this.polygonDistance;
      return 'translateX('+ xTranslation + 'px) translateY('+
        ((iterationCtr*68)-(Object.keys(Passion).length/2*42)) +'px)'
    }
  }
}
