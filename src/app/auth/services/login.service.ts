import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  loggedIn:boolean=false;
   isLoggedIn()
   {
    this.loggedIn=true;
   }
}
