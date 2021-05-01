import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  constructor() {}

  sortByPower(allHeroes: Hero[]): Hero[] {
    let sortedHeroes = allHeroes.sort((a,b) => a.powers.localeCompare(b.powers));
    return sortedHeroes;
  }
  
  sortByName(allHeroes: Hero[]): Hero[] {
    let sortedHeroes = allHeroes.sort((a,b) => a.name.localeCompare(b.name));
    return sortedHeroes;
  }
}
