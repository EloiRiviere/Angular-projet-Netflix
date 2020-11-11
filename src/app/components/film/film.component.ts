import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../../services/youtube.service';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthService } from 'src/app/auth.service';

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
              private youtubeService: YoutubeService, private auth: AuthService, private router : Router) { }

  ngOnInit(): void {
    if(!this.auth.isLoggedIn()){
      this.router.navigate(['']);
    }
    this.title = this.route.snapshot.paramMap.get('film');
    this.youtubeService.getVideo(this.title).subscribe((items) => this.url = this.videoUrl + items[0].id.videoId);
  }

}
