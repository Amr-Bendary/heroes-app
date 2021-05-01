import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../models/hero';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(heroes: Hero[], searchVal: string): Hero[] {
    if (!heroes || !searchVal) {
      return heroes;
    };
    return heroes.filter(hero => {
      if (hero.name.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase()))
        return hero;
        
      else if (hero.powers.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase()))
        return hero;
    })
  }

}
