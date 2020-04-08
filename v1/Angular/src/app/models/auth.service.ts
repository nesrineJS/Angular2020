import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrlUser = 'http://localhost:3000/auth/';
   isAuthenticated = false;

  constructor( private httpClient:HttpClient) { 

  }

  authenticate(user:User){
    return this.httpClient.post<User>(this.baseUrlUser+'login',user);
    this.isAuthenticated= true;

  }
   registration(user:User){
     return this.httpClient.post<User>(this.baseUrlUser+'register',user);
   }
    logout(){
      return this.httpClient.get(this.baseUrlUser+'/logout');
      this.isAuthenticated= false;

    }
}
