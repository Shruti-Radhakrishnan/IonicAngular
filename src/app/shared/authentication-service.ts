import { Injectable, NgZone } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
 export class AuthenticationService  {
  constructor() {  
  }
  isUserLoggedIn: boolean = false;

  login(email: string, password: string)
   {
     console.log(email);
     console.log(password);
     if(email&&password){
     this.isUserLoggedIn = true;
     localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 
     }

  return of(this.isUserLoggedIn)
  }
  PasswordRecover(email:any){
    console.log(email+"Email sent successfully")

  }
}
