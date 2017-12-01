import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PeopleModel } from './models/people-model';

@Injectable()
export class PeopleService {

  private _codeTestUrl = 'http://agl-developer-test.azurewebsites.net/people.json';

  constructor(
    private _http: Http
  ) { }

  public getPeople = (): Observable<Array<PeopleModel>> => { 
    return this._http.get(this._codeTestUrl)
      .map(response => response.json())
      .catch(err => {
        throw Observable.throw(new Error(err));
      });

  }
}
