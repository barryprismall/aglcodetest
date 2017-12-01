import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { PeopleComponent } from './components/people/people.component';
import { PeopleService } from './services/people.service';
import { HttpModule } from '@angular/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [
        AppComponent,
        PeopleComponent
      ],
      providers: [PeopleService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
