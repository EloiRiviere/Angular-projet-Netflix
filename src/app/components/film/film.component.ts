import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../../services/youtube.service';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  videoUrl = 'https://www.youtube.com/watch?v=';
  title: string;
  url: any;
  videoId;

  constructor(private route: ActivatedRoute,
              private youtubeService: YoutubeService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.paramMap.get('film');
    this.videoId = this.youtubeService.getVideo(this.title);
    console.log(this.videoId);
    this.url = this.videoUrl + this.videoId;
    console.log(this.url);
  }

}
