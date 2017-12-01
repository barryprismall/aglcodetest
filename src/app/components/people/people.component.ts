import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { PeopleClientModel } from 'app/components/people/models/peopleClient-model';
import { PeopleModel } from '../../services/models/people-model';
import * as _ from 'lodash';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  private _peopleClient: PeopleClientModel = {
    male: [],
    female: []
  };

  constructor(
    private _peopleService: PeopleService
  ) { }

  ngOnInit() {

    // Call the provider to retrieve a list of people from the People Service
    this._peopleService.getPeople().subscribe(people => {
      // Format the results and update the client model for display
      this._formatPeople(people);
    }, error => {
      // Simple error handling
      console.log('@@@BP unable to load the json file');
    })
  }

  _formatPeople = (people: Array<PeopleModel>) => {

    // Filter the list of people into male and female
    const males = _.filter(people, { gender: 'Male' });
    const females = _.filter(people, { gender: 'Female' });

    // Find the cat names (sorted) for each gender type
    this._peopleClient.male = this.getSortedPetNames(males);
    this._peopleClient.female = this.getSortedPetNames(females);
  }

  public getSortedPetNames = (people: Array<PeopleModel>): Array<string> => {

    // Extract the pets of type Cat from the list of people
    const cats = _.filter(_.flatMap(people, 'pets'), { type: 'Cat' });

    // Extract the list of cat names from the cats (exclude undefined)
    const catNames = _.remove(_.flatMap(cats, 'name'), undefined);

    // Make sure the names are not repeated, and alpha sort
    return _.orderBy(_.uniq(catNames));
  }
}
