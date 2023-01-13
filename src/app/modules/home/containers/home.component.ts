import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  constructor() {}

  setTime(param: number): void {
    console.log('timer: ', param);
  }
}
