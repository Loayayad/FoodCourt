import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  userRef: AngularFireList<any>[]=[];
  userRed: AngularFireObject<any>[]=[];
  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase,
    private afs: AngularFirestore
  ) { }

  getAllPosts() {
    // return this.afs.collection("posts").snapshotChanges();
    return this.afs.collection("posts").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en").snapshotChanges();
  }

  getAllComments() {
    return this.afs.collection("comments").snapshotChanges();
  }

  
}
