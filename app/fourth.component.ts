import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
  template: `
    <h3>fourth Component</h3>
    <p>This is the content of fourthComponent</p>
    <p>Routing Parameter ID: {{id}}</p>
  `
})
export class FourthComponent {

  constructor(private _routeParams:RouteParams) {
    this.id = this._routeParams.get('id');
  }

}
