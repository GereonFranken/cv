import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
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
import { SkillsComponent } from '../components/skills/skills.component';
import { PassionsComponent } from '../components/passions/passions.component';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from 'src/app/icons';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, AboutMeComponent, BackgroundComponent,
        ExperiencesComponent, SkillsComponent, PassionsComponent,  ],
      imports: [ BrowserAnimationsModule,IconsModule,  MatTabsModule, MatTableModule, 
        MatTreeModule, MatIconModule, FormsModule, MatRadioModule, MatCardModule, FontAwesomeModule, MatTooltipModule ],
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
