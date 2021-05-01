import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { SortService } from 'src/app/services/sort.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() sortedHeroes: Hero[];
  @Input() filterVal: string;

  onMobile: boolean;

  heroes: Hero[];

  constructor(private sortService: SortService) {}

  ngOnInit() {
    this.heroes = this.sortedHeroes;
    this.onMobile = this.isOnMobile();
  }

  isOnMobile(): boolean {
    const width = document.documentElement.clientWidth;
    const breakPoint = 768;

    return width < breakPoint ? true : false;
  }
}
