import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   isLoggedIn:boolean=false;
  constructor() { }
  logIn(){
    this.isLoggedIn=true;
  }
  logOut(){
    this.isLoggedIn=false;
  }
  isLogedIn(){
    return this.isLoggedIn;
  }
}
