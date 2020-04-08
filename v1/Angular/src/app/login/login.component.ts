import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../models/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user: User ={username:'', password:'' }// isLoggedInd:true
  constructor( private authService:AuthService, private router:Router) { 
     
  }

  ngOnInit(): void {
  }
   login(){
    this.authService.authenticate(this.user).subscribe(user=>this.sucessHandler(user),err=>this.failureHandler(err))
      // console.log(this.user)
   }
    sucessHandler(user){
      console.log(user)
      this.router.navigate['/admin']
    }
     failureHandler(error){
       console.log(error);
     }

}
