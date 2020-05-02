import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  profilbildPath = '.\\assets\\img\\profilbild1.jpg';
  constructor() { }

  ngOnInit(): void {
    /**
     * create navigation bar for components of cv :
     * About me
     * Background
     * Experiences
     * Hobbies
     */
  }

}
