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

  rated() {
    return this.http.get(this.url + 'movie/top_rated' + this.token);
  }

  upcoming() {
    return this.http.get(this.url + 'movie/upcoming' + this.token);
  }

  action() {
    return this.http.get(this.url + 'discover/movie' + this.token + '&with_genres=28');
  }

  aventure() {
    return this.http.get(this.url + 'discover/movie' + this.token + '&with_genres=12');
  }

  animation() {
    return this.http.get(this.url + 'discover/movie' + this.token + '&with_genres=16');
  }

  comedie() {
    return this.http.get(this.url + 'discover/movie' + this.token + '&with_genres=35');
  }

  crime() {
    return this.http.get(this.url + 'discover/movie' + this.token + '&with_genres=80');
  }

  documentaire() {
    return this.http.get(this.url + 'discover/movie' + this.token + '&with_genres=99');
  }

  drame() {
    return this.http.get(this.url + 'discover/movie' + this.token + '&with_genres=18');
  }

  familial() {
    return this.http.get(this.url + 'discover/movie' + this.token + '&with_genres=10751');
  }

  fantastique() {
    return this.http.get(this.url + 'discover/movie' + this.token + '&with_genres=14');
  }

  histoire() {
    return this.http.get(this.url + 'discover/movie' + this.token + '&with_genres=36');
  }

  horreur() {
    return this.http.get(this.url + 'discover/movie' + this.token + '&with_genres=27');
  }

  musique() {
    return this.http.get(this.url + 'discover/movie' + this.token + '&with_genres=10402');
  }

  mystere() {
    return this.http.get(this.url + 'discover/movie' + this.token + '&with_genres=9648');
  }

  romance() {
    return this.http.get(this.url + 'discover/movie' + this.token + '&with_genres=10749');
  }

  sf() {
    return this.http.get(this.url + 'discover/movie' + this.token + '&with_genres=878');
  }

  telefilm() {
    return this.http.get(this.url + 'discover/movie' + this.token + '&with_genres=10770');
  }

  thriller() {
    return this.http.get(this.url + 'discover/movie' + this.token + '&with_genres=53');
  }

  guerre() {
    return this.http.get(this.url + 'discover/movie' + this.token + '&with_genres=10752');
  }

  western() {
    return this.http.get(this.url + 'discover/movie' + this.token + '&with_genres=37');
  }
}
