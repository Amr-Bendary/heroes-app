import { Component, OnInit } from '@angular/core';
import { SortService } from 'src/app/services/sort.service';
import { Hero } from 'src/app/models/hero';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  sortByPower = false;
  heroes: Hero[];
  sortedHeroes = [];
  filterVal;

  constructor(
    private sortService: SortService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.heroes = this.dataService.getAllHeroes();
    this.sortedHeroes = this.sortService.sortByName(this.heroes);
  }

  switchSorting(isByPower) {
    if (isByPower)
      this.sortedHeroes = this.sortService.sortByPower(this.heroes);
    else this.sortedHeroes = this.sortService.sortByName(this.heroes);
  }

  getFilterVal(val) {
    this.filterVal = val;
    console.log(this.filterVal);
  }
}
