import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/models/hero';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  heroes: Hero[];
  hero: Hero;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.heroes = this.dataService.getAllHeroes();
    this.getCurrentHero();
    console.log(this.heroes);

    console.log(this.hero);
  }

  getCurrentHero() {
    this.hero = this.heroes.find(
      (hero) => hero.id === +this.route.snapshot.paramMap.get('id')
    );
  }
}
