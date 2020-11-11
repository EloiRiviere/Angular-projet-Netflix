import { newArray } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
    providedIn : 'root'
})

export class AuthService {
    userData: any;
    
    constructor(private afAuth : AngularFireAuth, private router : Router){ }      
    
    isLoggedIn(){
        var loggedIn = false; 
        firebase.default.auth().onAuthStateChanged(function(user){
            if(user){
                loggedIn = true; 
            }
            
        });
        return loggedIn;
    }

    SetUserData(user) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
        const userData: User = {
          id: user.uid,
          email: user.email,
          password: user.password,
          bookmarks: null
        }
        return userRef.set(userData, {
          merge: true
        })
    }

    createUser(email:string, password:string){
        firebase.default.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }

    login(email:string, password:string){
        return this.afAuth.signInWithEmailAndPassword(email, password)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;   
            // ...
        })
        .then(() => {
            //this.router.navigate(['/home']);
        });
    }

    loginGoogle(){
        return this.afAuth.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider())
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;   
            // ...
        })
        .then(() => {
            this.router.navigate(['/home']);
        });
    }

    logout(){
        this.afAuth.signOut();
    }
}