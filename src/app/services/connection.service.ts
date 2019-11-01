import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  apikey = '3f95c335-0bde-4178-9c9f-fa52647a422f';
  settings: [
    { auth:
      { username: 'uAPI9197245297-dbd29f3b',
        password: 'wkh6TYd3XR4JbfaMq6RJqMWMm',
        region: 'americas',
      }
    }
  ];
  constructor() { }
  
  getAutocomplete(text: string) {
    return this.getUrl() + 'autocomplete.xml/?api_key=' + this.apikey + '&query=' + text;
  }

  public getUrl() {
    return 'https://iatacodes.org/api/v6/';
  }

  public getSettings() {
    return this.settings;
  }

  public getDrupalUrl() {
    return 'http://localhost:4000/api/v1/';
    // return 'http://traveldele.drupal:8888/api/v1/';

  }
}
