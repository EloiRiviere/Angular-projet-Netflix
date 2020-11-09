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

  videoUrl = 'https://www.youtube.com/embed/';
  title: string;
  url: any;
  videoId;

  constructor(private route: ActivatedRoute,
              private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.paramMap.get('film');
    this.youtubeService.getVideo(this.title).subscribe((items) => this.url = this.videoUrl + items[0].id.videoId);
    console.log(this.url);
  }

}
