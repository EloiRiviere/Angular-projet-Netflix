export class User{

  id: string;
  email: string;
  password: string;
  bookmarks: Array<string>;

  constructor(email: string, password: string){
    // this.id = id;
    this.id = null;
    this.email = email;
    this.password = password;
    this.bookmarks = [];
  }

  getId(){
    return this.id;
  }

  getEmail(){
    return this.email;
  }

  checkPassword(password: string){
    return this.password == password;
  }

  addBookmark(film: string){
    this.bookmarks.push(film);
  }

  deleteBookmark(film: string){
    this.bookmarks.splice(this.bookmarks.indexOf(film), 1);
  }
}
