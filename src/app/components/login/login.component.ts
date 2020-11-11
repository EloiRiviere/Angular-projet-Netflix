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
  }

  signIn(email:string, password:string) {
    this.auth.createUser(email, password);
    if(this.auth.isLoggedIn()){
      // alert("Utilisateur créé avec succès.");
      this.route.navigate(['/home']);
    }
  }

  login(email:string, password:string) {
    this.auth.login(email, password);
    if(this.auth.isLoggedIn()){
      this.route.navigate(['/home']);
    }
  }

  signInWithGoogle(){
    this.auth.signinGoogle();
    if(this.auth.isLoggedIn()){
      this.route.navigate(['/home']);
    }
  }

  loginWithGoogle() {
    this.auth.loginGoogle();
    if(this.auth.isLoggedIn()){
      this.route.navigate(['/home']);
    }
  }
}
