import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from 'src/app/app.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { IconsModule } from 'src/app/icons';
import { HeaderComponent } from '../../header/header.component';

import { PassionsComponent } from './passions.component';

describe('PassionsComponent', () => {
  let component: PassionsComponent;
  let fixture: ComponentFixture<PassionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassionsComponent ],
      imports: [ MatTooltipModule, FontAwesomeModule, BrowserAnimationsModule, IconsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
