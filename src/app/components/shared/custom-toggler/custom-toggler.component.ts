import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-toggler',
  templateUrl: './custom-toggler.component.html',
  styleUrls: ['./custom-toggler.component.css'],
})
export class CustomTogglerComponent {
  @Output() sortingBy: EventEmitter<any> = new EventEmitter();

  sortByPower: boolean = false;

  constructor() {}

  toggle() {
    const tog: HTMLElement = document.querySelector('.toggler');
    tog.classList.toggle('on');
    this.sortByPower = tog.classList.contains('on') ? true : false;

    // Sending the method depending on the toggler clicked or not to parent component and then to parent of parent until it reaches HomeComponent and then sending it to TableComponent to sort depending on it
    let method = this.sortByPower;
    this.sortingBy.emit(method);
  }
}
