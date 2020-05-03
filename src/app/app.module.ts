import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './content/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './content/components/about-me/about-me.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { BackgroundComponent } from './content/components/background/background.component';
import { ExperiencesComponent } from './content/components/experiences/experiences.component';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

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
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule,
    BehaviorSubject,
    MatTreeNestedDataSource,
    NestedTreeControl,
  ],
  exports: [
    MatTableModule,
    MatTabsModule,
    BehaviorSubject,
    MatTreeNestedDataSource,
    NestedTreeControl,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
