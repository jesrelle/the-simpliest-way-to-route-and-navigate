import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
  template: `
    <h3>third Component</h3>
    <p>This is the content of thirdComponent</p>
    <p>Routing Parameter ID: {{id}}</p>
  `
})
export class ThirdComponent {

  constructor(private _routeParams:RouteParams) {
    this.id = this._routeParams.get('id');
  }

}
