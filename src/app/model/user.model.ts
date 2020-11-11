import { FilmComponent } from 'src/app/components/film/film.component';

export class User{

    id: string;
    email: string;
    password: string; 
    bookmarks: Array<FilmComponent>; //May change 

    constructor(id:string, email:string, password:string){
        this.id = id;
        this.email = email; 
        this.password = password;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
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