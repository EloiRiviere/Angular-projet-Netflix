import { FilmComponent } from 'src/app/components/film/film.component';

export class User{

    pseudo: string;
    mail: string;
    password: string; 
    bookmarks: Array<FilmComponent>; //May change 

    constructor(pseudo:string, mail:string, password:string){
        this.pseudo = pseudo;
        this.mail = mail; 
        this.password = password;
    }

    getPseudo(){
        return this.pseudo;
    }

    checkPassword(password:string){
        if(this.password == password){
            return true;
        }
        return false; 
    }

    addBookmark(film:FilmComponent){
        this.bookmarks.push(film);
    }

    deleteBookmark(film:FilmComponent){
        this.bookmarks.splice(this.bookmarks.indexOf(film), 1);
    }

    
}