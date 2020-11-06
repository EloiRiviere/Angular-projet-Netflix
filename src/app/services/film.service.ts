import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private url = 'https://api.themoviedb.org/3/';
  private token = '?api_key=52ff9827d9c7caeb290a41c3ea052989&language=fr-FR';
  private imgUrl = 'https://image.tmdb.org/t/p/w500';

  constructor(private http: HttpClient) { }

  discover() {
    return this.http.get(this.url + 'discover/movie' + this.token);
  }

}
