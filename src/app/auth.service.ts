import { newArray } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { User } from './model/user.model';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
    providedIn : 'root'
})

export class AuthService {
  userData: any;
  private dbPath = '/user';
  dbRef: AngularFireList<User> = null;

  constructor(private afAuth: AngularFireAuth,
              private route: Router,
              private db: AngularFireDatabase) {
    this.dbRef = db.list(this.dbPath);
  }
    isLoggedIn(){
        var user = firebase.default.auth().currentUser
        var loggedIn = false;

        if(user){
            loggedIn = true;
        }

        return loggedIn;
    }

    createUser(email:string, password:string){
        firebase.default.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("Error : " + errorMessage);
        });
        this.dbRef.push(new User(email, password));
    }

    login(email:string, password:string){
        firebase.default.auth().signInWithEmailAndPassword(email, password)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("Error : " + errorMessage);
            console.log("Error : " + errorMessage);
        });
    }

    signinGoogle(){
        firebase.default.auth().signInWithRedirect(new firebase.default.auth.GoogleAuthProvider())
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Error : " + errorMessage);
        });
    }

    loginGoogle(){
        firebase.default.auth().signInWithRedirect(new firebase.default.auth.GoogleAuthProvider())
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Error : " + errorMessage);
        });
    }

    logout(){
        firebase.default.auth().signOut();
        console.log(firebase.default.auth().currentUser);
    }
}
