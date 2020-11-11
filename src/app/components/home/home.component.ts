import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../services/film.service';
import {Discover} from '../../model/film';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listFilmDiscover;

  constructor(private filmService: FilmService, private auth: AuthService, private route : Router) { }

  ngOnInit(): void {  
    if(!this.auth.isLoggedIn()){
      this.route.navigate(['']);
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
