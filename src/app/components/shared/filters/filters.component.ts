import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  @Output() switchSorting: EventEmitter<any> = new EventEmitter();
  @Output() getFilterVal: EventEmitter<any> = new EventEmitter();
  searchVal: string;
  constructor() {}

  sortingBy(power) {
    if (power) console.log('sortedByPower');
    else console.log('sortedByName');
    this.switchSorting.emit(power);
  }

  publishFilterVal() {
    this.getFilterVal.emit(this.searchVal);
  }

  toggle() {
    const wrapper: HTMLElement = document.querySelector('.wrapper');
    const search: HTMLElement = document.querySelector('.search-wrapper');
    const sort: HTMLElement = document.querySelector('.sorting');

    search.classList.toggle('hidden');
    sort.classList.toggle('hidden');
    wrapper.classList.toggle('collapse');

    setTimeout(() => {
      search.classList.toggle('none');
      search.classList.toggle('none');
    }, 400);
  }
}
