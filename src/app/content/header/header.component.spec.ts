import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeModule } from '@angular/material/tree';
import { MatTableModule } from '@angular/material/table';
import { ExperiencesComponent } from './../components/experiences/experiences.component';
import { BackgroundComponent } from './../components/background/background.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AboutMeComponent } from './../components/about-me/about-me.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, AboutMeComponent, BackgroundComponent, ExperiencesComponent ],
      imports: [ BrowserAnimationsModule, MatTabsModule, MatTableModule, MatTreeModule, MatIconModule ],
      providers: [],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
