import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router) {

  }

  ngOnInit(): void {
    // this.auth.createUser("dyeallow@gmail.com","siong123");
  }

  login(email:string, password:string) {
    this.auth.login(email, password);
    if(this.auth.isLoggedIn()){
      console.log("true");
      this.route.navigate(['/home']);
    }
  }

  loginGoogle(){
    this.auth.loginGoogle();
    if(this.auth.isLoggedIn()){
      this.route.navigate(['/home']);
    }
  }
}
