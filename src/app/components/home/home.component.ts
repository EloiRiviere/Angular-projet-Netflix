import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FilmService} from '../../services/film.service';
import {Discover} from '../../model/film';
import { AuthService } from 'src/app/services/auth.service';
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
  listFilmPopular;
  listFilmUpcoming;
  listFilmAction;
  listFilmAventure: any;
  listFilmAnimation: any;
  listFilmComedie: any;
  listFilmCrime: any;
  listFilmDocumentaire: any;
  listFilmDrame: any;
  listFilmFamilial: any;
  listFilmFantastique: any;
  listFilmHistoire: any;
  listFilmHorreur: any;
  listFilmUpMusique: any;
  listFilmMystere: any;
  listFilmRomance: any;
  listFilmSF: any;
  listFilmTelefilm: any;
  listFilmThriller: any;
  listFilmGuerre: any;
  listFilmWestern: any;
  listFilmFavoris = [];

  constructor(private filmService: FilmService, private auth: AuthService, private route : Router, private authService: AuthService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.discover();
    this.rated();
    this.upcoming();
    this.action();
    this.aventure();
    this.animation();
    this.comedie();
    this.crime();
    this.documentaire();
    this.drame();
    this.familial();
    this.fantastique();
    this.histoire();
    this.horreur();
    this.musique();
    this.mystere();
    this.romance();
    this.sf();
    this.telefilm();
    this.thriller();
    this.guerre();
    this.western();
    this.favoris();
    this.cdr.detectChanges();
    window.resizeTo(500, 500);
  }
  favoris(){
    this.authService.getFavoris().subscribe(data => {
      const user: User = data.filter(d => d.email = firebase.default.auth().currentUser.email)[0];
      this.listFilmFavoris.push(user.bookmarks);
      this.cdr.detectChanges();
    });
  }

  discover() {
    this.filmService.discover().subscribe((data: Discover) => {
      this.listFilmDiscover = data.results;
      this.cdr.detectChanges();
    });
  }

  rated() {
    this.filmService.rated().subscribe((data: Discover) => {
      this.listFilmPopular = data.results;
      this.cdr.detectChanges();
    });
  }

  upcoming() {
    this.filmService.upcoming().subscribe((data: Discover) => {
      this.listFilmUpcoming = data.results;
      this.cdr.detectChanges();
    });
  }

  action() {
    this.filmService.action().subscribe((data: Discover) => {
      this.listFilmAction = data.results;
      this.cdr.detectChanges();
    });
  }
  aventure() {
    this.filmService.aventure().subscribe((data: Discover) => {
    this.listFilmAventure = data.results;
    this.cdr.detectChanges();
  });
  }
  animation() {
    this.filmService.animation().subscribe((data: Discover) => {
      this.listFilmAnimation = data.results;
      this.cdr.detectChanges();
    });
  }
  comedie() {
    this.filmService.comedie().subscribe((data: Discover) => {
      this.listFilmComedie = data.results;
      this.cdr.detectChanges();
    });
  }
  crime() {
    this.filmService.crime().subscribe((data: Discover) => {
      this.listFilmCrime = data.results;
      this.cdr.detectChanges();
    });
  }
  documentaire() {
    this.filmService.documentaire().subscribe((data: Discover) => {
      this.listFilmDocumentaire = data.results;
      this.cdr.detectChanges();
    });
  }
  drame() {
    this.filmService.drame().subscribe((data: Discover) => {
      this.listFilmDrame = data.results;
      this.cdr.detectChanges();
    });
  }
  familial() {
    this.filmService.familial().subscribe((data: Discover) => {
      this.listFilmFamilial = data.results;
      this.cdr.detectChanges();
    });
  }
  fantastique() {
    this.filmService.fantastique().subscribe((data: Discover) => {
      this.listFilmFantastique = data.results;
      this.cdr.detectChanges();
    });
  }
  histoire() {
    this.filmService.histoire().subscribe((data: Discover) => {
      this.listFilmHistoire = data.results;
      this.cdr.detectChanges();
    });
  }
  horreur() {
    this.filmService.horreur().subscribe((data: Discover) => {
      this.listFilmHorreur = data.results;
      this.cdr.detectChanges();
    });
  }
  musique() {
    this.filmService.musique().subscribe((data: Discover) => {
      this.listFilmUpMusique = data.results;
      this.cdr.detectChanges();
    });
  }
  mystere() {
    this.filmService.mystere().subscribe((data: Discover) => {
      this.listFilmMystere = data.results;
      this.cdr.detectChanges();
    });
  }
  romance() {
    this.filmService.romance().subscribe((data: Discover) => {
      this.listFilmRomance = data.results;
      this.cdr.detectChanges();
    });
  }
  sf() {
    this.filmService.sf().subscribe((data: Discover) => {
      this.listFilmSF = data.results;
      this.cdr.detectChanges();
    });
  }
  telefilm() {
    this.filmService.telefilm().subscribe((data: Discover) => {
      this.listFilmTelefilm = data.results;
      this.cdr.detectChanges();
    });
  }
  thriller() {
    this.filmService.thriller().subscribe((data: Discover) => {
      this.listFilmThriller = data.results;
      this.cdr.detectChanges();
    });
  }
  guerre() {
    this.filmService.guerre().subscribe((data: Discover) => {
      this.listFilmGuerre = data.results;
      this.cdr.detectChanges();
    });
  }
  western() {
    this.filmService.western().subscribe((data: Discover) => {
      this.listFilmWestern = data.results;
      this.cdr.detectChanges();
    });
  }

}
