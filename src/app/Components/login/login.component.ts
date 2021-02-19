import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSignedIn = false;
  user: string |null='{}';
  constructor(
    private firebaseSignIn: AuthService,
    private route: Router
    ) { }

  ngOnInit(): void {
    
    if(localStorage.getItem('user') !== null){
      //console.log(this.user);
      this.isSignedIn = true;

    }
    else{
      this.isSignedIn = false;
    }
  }

  async onSignIn(email:string,password:string){
    await this.firebaseSignIn.signIn(email,password)
    .then(res =>{
      console.log(res);
      if(this.firebaseSignIn.isLoggedIn){
        this.isSignedIn = true;
        this.route.navigate(['/Home'])
      }
    })
    
  }

  
// route(){
//   this.Router.navigate(['/Home'])
// }
}
