import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
    providedIn : 'root'
})

export class AuthService {
    constructor(private afAuth : AngularFireAuth){ }      

    login(){
        //this.afAuth.signInWithEmailAndPassword(new firebase.default.)
    }

    loginGoogle(){
        this.afAuth.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider());
    }

    logout(){
        this.afAuth.signOut();
    }
}