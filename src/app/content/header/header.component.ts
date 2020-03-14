import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  profilbildPath = 'D:\\Eigene-Projekte\\cv\\src\\assets\\profilbild1.jpeg'
  constructor() { }

  ngOnInit(): void {
    /**
     * create navigation bar for components of cv :
     * About me
     * Education
     * Experiences
     * Hobbies
     */
  }

}
