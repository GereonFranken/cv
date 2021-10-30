import { Component, HostListener, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  selectedLanguage: 'english' | 'german' = 'english';
  profilbildPath = 'assets\\img\\profilbild1.jpg';
  defaultChecked = true;
  onMobile = false;

  constructor(private cvStore: Store) { }

  ngOnInit(): void { 
    this.cvStore.select(state => state.cvState.onMobile).subscribe(onMobile => this.onMobile = onMobile);
  }

  // @HostListener('window:resize', ['$event'])
  // getScreenWidth(event?) {
  //   if (window.innerHeight > window.innerWidth) this.onMobile = true;
  //   else this.onMobile = false;
  // }

}
