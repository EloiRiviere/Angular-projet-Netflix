import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../services/film.service';
import {Discover} from '../../model/film';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import {User} from '../../model/user.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listFilmDiscover;
  listFilmFavoris;

  constructor(private filmService: FilmService, private auth: AuthService, private route : Router, private authService: AuthService) { }

  ngOnInit(): void {
    if(!this.auth.isLoggedIn()){
      this.route.navigate(['']);
    }
    this.discover();
    this.favoris();
  }
  favoris(){
    this.authService.getFavoris().subscribe(data => {
      const user: User = data.filter(d => d.email = firebase.default.auth().currentUser.email)[0];
      console.log(user);
      this.listFilmFavoris = user.bookmarks;
    });
  }

  discover() {
    this.filmService.discover().subscribe((data: Discover) => {
      console.log(data);
      this.listFilmDiscover = data.results;
    });
  }

}
