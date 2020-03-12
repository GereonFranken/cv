import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './content/about-me/about-me.component';
import { MatTab } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    MatTab,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTab,
  ],
  exports: [
    MatTab,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
