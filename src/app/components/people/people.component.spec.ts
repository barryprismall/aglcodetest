import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleComponent } from './people.component';
import { PeopleService } from '../../services/people.service';
import { HttpModule } from '@angular/http';

describe('PeopleComponent', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [PeopleComponent],
      providers: [PeopleService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('_getSortedPetNames - No people', () => {
    expect(component.getSortedPetNames([])).toEqual([]);
  });

  it('_getSortedPetNames - single person no pets', () => {
    expect(component.getSortedPetNames([{
      age: 21,
      gender: 'Male',
      name: 'Test Name',
      pets: null
    }])).toEqual([]);
  });

  it('_getSortedPetNames - single person two cats', () => {
    expect(component.getSortedPetNames([{
      age: 21,
      gender: 'Male',
      name: 'Test Name',
      pets: [{
        name: 'BBB',
        type: 'Cat'
      },
      {
        name: 'AAA',
        type: 'Cat'
      }]
    }])).toEqual(['AAA', 'BBB']);
  });

  it('_getSortedPetNames - single person two dogs', () => {
    expect(component.getSortedPetNames([{
      age: 21,
      gender: 'Male',
      name: 'Test Name',
      pets: [{
        name: 'BBB',
        type: 'Dog'
      },
      {
        name: 'AAA',
        type: 'Dog'
      }]
    }])).toEqual([]);
  });

  it('_getSortedPetNames - two people each with a cat', () => {
    expect(component.getSortedPetNames([
      {
        age: 21,
        gender: 'Male',
        name: 'Test Name',
        pets: [{
          name: 'BBB',
          type: 'Cat'
        }]
      },
      {
        age: 22,
        gender: 'Female',
        name: 'Test Name',
        pets: [,
          {
            name: 'AAA',
            type: 'Cat'
          }]
      }
    ])).toEqual(['AAA', 'BBB']);
  });

});
