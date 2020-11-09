import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {FilmComponent} from './components/film/film.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: ':film',
    component: FilmComponent
  },
  {
    path:"login", 
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 
  providers: [AuthService]
})
export class AppRoutingModule { }
