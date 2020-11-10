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

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
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
  }

  discover() {
    this.filmService.discover().subscribe((data: Discover) => {
      this.listFilmDiscover = data.results;
    });
  }

  rated() {
    this.filmService.rated().subscribe((data: Discover) => {
      this.listFilmPopular = data.results;
    });
  }

  upcoming() {
    this.filmService.upcoming().subscribe((data: Discover) => {
      this.listFilmUpcoming = data.results;
    });
  }

  action() {
    this.filmService.action().subscribe((data: Discover) => {
      this.listFilmAction = data.results;
    });
  }
  aventure() {
    this.filmService.aventure().subscribe((data: Discover) => {
    this.listFilmAventure = data.results;
  });
  }
  animation() {
    this.filmService.animation().subscribe((data: Discover) => {
      this.listFilmAnimation = data.results;
    });
  }
  comedie() {
    this.filmService.comedie().subscribe((data: Discover) => {
      this.listFilmComedie = data.results;
    });
  }
  crime() {
    this.filmService.crime().subscribe((data: Discover) => {
      this.listFilmCrime = data.results;
    });
  }
  documentaire() {
    this.filmService.documentaire().subscribe((data: Discover) => {
      this.listFilmDocumentaire = data.results;
    });
  }
  drame() {
    this.filmService.drame().subscribe((data: Discover) => {
      this.listFilmDrame = data.results;
    });
  }
  familial() {
    this.filmService.familial().subscribe((data: Discover) => {
      this.listFilmFamilial = data.results;
    });
  }
  fantastique() {
    this.filmService.fantastique().subscribe((data: Discover) => {
      this.listFilmFantastique = data.results;
    });
  }
  histoire() {
    this.filmService.histoire().subscribe((data: Discover) => {
      this.listFilmHistoire = data.results;
    });
  }
  horreur() {
    this.filmService.horreur().subscribe((data: Discover) => {
      this.listFilmHorreur = data.results;
    });
  }
  musique() {
    this.filmService.musique().subscribe((data: Discover) => {
      this.listFilmUpMusique = data.results;
    });
  }
  mystere() {
    this.filmService.mystere().subscribe((data: Discover) => {
      this.listFilmMystere = data.results;
    });
  }
  romance() {
    this.filmService.romance().subscribe((data: Discover) => {
      this.listFilmRomance = data.results;
    });
  }
  sf() {
    this.filmService.sf().subscribe((data: Discover) => {
      this.listFilmSF = data.results;
    });
  }
  telefilm() {
    this.filmService.telefilm().subscribe((data: Discover) => {
      this.listFilmTelefilm = data.results;
    });
  }
  thriller() {
    this.filmService.thriller().subscribe((data: Discover) => {
      this.listFilmThriller = data.results;
    });
  }
  guerre() {
    this.filmService.guerre().subscribe((data: Discover) => {
      this.listFilmGuerre = data.results;
    });
  }
  western() {
    this.filmService.western().subscribe((data: Discover) => {
      this.listFilmWestern = data.results;
    });
  }

}
