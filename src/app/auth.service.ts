import { newArray } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
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
    
    constructor(private afAuth : AngularFireAuth, private route : Router){ }      
    
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
    }

    login(email:string, password:string){
        this.afAuth.signInWithEmailAndPassword(email, password)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;   
            alert("Error : " + errorMessage);
            console.log("Error : " + errorMessage);
        })
    }

    signinGoogle(){
        return this.afAuth.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider())
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;   
            console.log("Error : " + errorMessage);
        })
    }

    loginGoogle(){
        return this.afAuth.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider())
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;   
            console.log("Error : " + errorMessage);
        })
    }

    logout(){
        firebase.default.auth().signOut();
        console.log(firebase.default.auth().currentUser);
    }
}