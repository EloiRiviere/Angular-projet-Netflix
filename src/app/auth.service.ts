import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { User } from './users/components/user/user.model';

@Injectable({
    providedIn : 'root'
})
export class AuthService {
    user: Observable<User>;
    constructor(private afAuth: AngularFireAuth){ }

    login(){
        this.afAuth.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider());
    }

    logout(){
        this.afAuth.signOut();
    }
}
