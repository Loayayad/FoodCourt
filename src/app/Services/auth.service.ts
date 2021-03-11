import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  userID:string|undefined='';
  user:string|null='';
  constructor(
    private firebaseAuth : AngularFireAuth,
    private firebaseFirestore : AngularFirestore,
    ) { }

  async signIn(email: string, password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res =>{
      //console.log(res.user);
      if(res){
        this.isLoggedIn =true;
        localStorage.setItem('user',JSON.stringify(res.user?.uid)) 
      }
      
    })
  }

  async signUpAuthentication(email: string, password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then (res =>{
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user?.uid))
      this.userID=res.user?.uid;
    })
  }

  logout(){
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    localStorage.removeItem('username');
  }

  async signUpFireStore(userName: string,email: string){
    this.user=localStorage.getItem('user');
    if(this.user){
      this.userID=this.user;
    }
    await this.firebaseFirestore.collection("users").doc(this.userID).set({userID:this.userID,email: email,username: userName})
  }
  
  async profile(data: object){
    this.user=localStorage.getItem('user');
    if(this.user){
      this.userID=this.user;
    }
    await this.firebaseFirestore.collection("users").doc(this.userID).set(data,{merge:true});
  }
}
