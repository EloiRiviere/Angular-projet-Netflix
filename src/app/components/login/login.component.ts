import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService,
              private route: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.login();
    this.route.navigate(['/home']);
  }
}
