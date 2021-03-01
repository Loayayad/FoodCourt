import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import { AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class HomeAPIService {

  userRef: AngularFireList<any>[]=[];
  userRed: AngularFireObject<any>[]=[];

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase,
    private afs: AngularFirestore
    ) { }

  getHomeItems() {
    return this.afs.collection("static").doc("home").collection(localStorage.getItem("lang")||"en").doc(localStorage.getItem("lang")||"en").snapshotChanges();
  }

  getHomeMealByID(pID:number)
  {
    return this.afs.collection("meals").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en",ref => ref.where('id','==',pID)).snapshotChanges();
  }

  getHomeOffer()
  {
    return this.afs.collection("meals").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en",ref => ref.where('show','==',true).limit(3)).snapshotChanges();
  }

  getHomeRecommended()
  {
    return this.afs.collection("meals").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en",ref=> ref.limit(6)).snapshotChanges();
  }
}
