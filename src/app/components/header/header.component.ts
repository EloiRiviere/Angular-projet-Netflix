import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()){
      this.username = firebase.default.auth().currentUser.email;
    } else {
      this.username = 'anonymous';
    }
  }

}
