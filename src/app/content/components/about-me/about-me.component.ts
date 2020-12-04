import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  selectedLanguage: 'english' | 'german' = 'english';
  profilbildPath = '..\\..\\..\\assets\\img\\profilbild1.jpg';
  defaultChecked = true;

  constructor() { }

  ngOnInit(): void { }

}
