import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private url = 'https://www.googleapis.com/youtube/v3/search?q=';
  private token = '&key=AIzaSyAX9j6YXV4QWyP-nCnLJT8ABYH9EKTIwsA&maxResults=1';
  data;

  constructor(private http: HttpClient) { }

  getVideo(query) {
    query = query.replace(' ', '+');
    query += '+bande+annonce';
    const url = this.url + query + this.token;

    return this.http.get(url).pipe(
      map((response: any) => response.items)
    ).subscribe((items) => console.log('test', items[0].id.videoId));
  }

}
