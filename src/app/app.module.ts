import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';


import { AboutMeComponent } from './content/components/about-me/about-me.component';
import { BackgroundComponent } from './content/components/background/background.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './content/header/header.component';
import { IconsModule } from './icons';
import { ExperiencesComponent } from './content/components/experiences/experiences.component';
import { MatButtonModule } from '@angular/material/button';
import { PassionsComponent } from './content/components/passions/passions.component';
import { SkillsComponent } from './content/components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    BackgroundComponent,
    ExperiencesComponent,
    PassionsComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IconsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    FontAwesomeModule,
    FormsModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    IconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
