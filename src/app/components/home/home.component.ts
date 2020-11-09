import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../services/film.service';
import {Discover} from '../../model/film';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listFilmDiscover;

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.discover();
  }

  discover() {
    this.filmService.discover().subscribe((data: Discover) => {
      console.log(data);
      this.listFilmDiscover = data.results;
    });
  }

}
