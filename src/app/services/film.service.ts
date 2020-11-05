import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private url = 'https://api.themoviedb.org/3/';
  private token = 'api_key=52ff9827d9c7caeb290a41c3ea052989';

  constructor() { }

}
