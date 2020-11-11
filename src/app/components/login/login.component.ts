import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email;
  password;

  constructor(private auth: AuthService, private route: Router) {
  }

  ngOnInit(): void {
    this.auth.createUser("dyeallow@gmail.com","siong123");
  }

  signIn() {

  }

  loginWithoutGoogle() {
    this.auth.login(this.email, this.password);
    this.route.navigate(['/home']);
  }

  loginWithGoogle() {
    this.auth.loginGoogle();
    this.route.navigate(['/home']);
  }
}
