import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isSignUp = false;

  constructor(
    private firebaseSignUp: AuthService,
    private route: Router 
    ){ }

  ngOnInit(): void {
    if(localStorage.getItem('user')!== null){
      this.isSignUp=true
    }else{
      this.isSignUp = false
    }
  }

  async onSignUp(email:string,password:string){
    await this.firebaseSignUp.signUp(email,password)
    .then((res)=>{
      if(this.firebaseSignUp.isLoggedIn){
        this.isSignUp = true
        this.route.navigate(['/Home'])
      }
    })
    
  }

}
