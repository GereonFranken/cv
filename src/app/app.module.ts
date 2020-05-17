import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BehaviorSubject } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';

import { AboutMeComponent } from './content/components/about-me/about-me.component';
import { BackgroundComponent } from './content/components/background/background.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './content/header/header.component';
import { ExperiencesComponent } from './content/components/experiences/experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    BackgroundComponent,
    ExperiencesComponent,
  ],
  imports: [
    // BehaviorSubject,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatTreeModule,
  ],
  exports: [
    MatTableModule,
    MatTabsModule,
    // BehaviorSubject,
    MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
