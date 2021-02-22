import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isSignUp = false;
signUpForm:any;
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
    this.signUpForm= new FormGroup({
      userName: new FormControl('',[Validators.required,Validators.minLength(4)]),
      email: new FormControl('',[Validators.email,Validators.required]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      rewritePass: new FormControl('')
    })
  }

  async onSignUp(username:string,email:string,password:string){
    
    await this.firebaseSignUp.signUpAuthentication(email,password)
    .then(async()=>{
      await this.firebaseSignUp.signUpFireStore(username,email)

      localStorage.setItem('username',username);
      
      if(this.firebaseSignUp.isLoggedIn){
        this.isSignUp = true
        this.route.navigate(['/CreateProfile'])
      }
    })

    
    //console.warn(this.signUpForm.value);

  }


}
