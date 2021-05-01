import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import heroes from '../backend/heroes.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  // to be honest I imported the JSON file directly because I don't know how to use HTTPClient locally!, I can only use it with real APIs, I got errors and I had no enough time
  getAllHeroes(): Hero[] {
    return heroes;
  }
}
