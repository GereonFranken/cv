import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  githubSrc = '.\\assets\\img\\github.png';
  instagramSrc = '.\\assets\\img\\instagram.png';
  linkedInSrc = '.\\assets\\img\\linkedIn.png';

  githubUrl = 'https://github.com/GereonFranken';
  instagramUrl = 'https://www.instagram.com/gereon.f/';
  linkedInUrl = 'https://www.linkedin.com/in/gereon-franken/';

  constructor() { }

  ngOnInit(): void {
    /**
     * Create footer bar with links
     * LinkedIn
     * PDF Download? 
     */
  }

}
