import{ HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import { AngularFirestore} from '@angular/fire/firestore'


@Injectable({
  providedIn: 'root'
})
export class ChefService {

  userRef: AngularFireList<any>[]=[];
  userRed: AngularFireObject<any>[]=[];

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase,
    private afs: AngularFirestore
    ) { }
  
  // getAllChefs():Observable<IChefs[]>{

  //   return this.http.get<IChefs[]>(`${environment.API_URL}/chefs`);
  // }

  getChefItems() {
    return this.afs.collection("static").doc("chefs").collection(localStorage.getItem("lang")||"en").doc(localStorage.getItem("lang")||"en").snapshotChanges();
  }
  
  getAllChefs(chefIndex:number)
  {
    return this.afs.collection("chefs").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en",ref=> ref.limit(chefIndex)).snapshotChanges();
  }

  // getChefsByID(cID:number):Observable<IChefs>
  // {
  //   return this.http.get<IChefs>(`${environment.API_URL}/chefs/${cID}`);
  // }

  getChefsByID(cID:number)
  {
    return this.afs.collection("chefs").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en",ref => ref.where('id','==', cID)).snapshotChanges();
  }
}
