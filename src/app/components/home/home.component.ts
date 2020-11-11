import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../services/film.service';
import {Discover} from '../../model/film';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listFilmDiscover;

  constructor(private filmService: FilmService, private auth: AuthService) { }

  ngOnInit(): void {  
    if(this.auth.isLoggedIn()){
      this.discover;
    }
    this.discover();
  }

  discover() {
    this.filmService.discover().subscribe((data: Discover) => {
      console.log(data);
      this.listFilmDiscover = data.results;
    });
  }

}
