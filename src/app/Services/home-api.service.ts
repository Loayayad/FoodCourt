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

  // getHomeItems(): Observable <any[]>
  // {
  //   return this.http.get<any[]>(`${environment.API_URL}/home`);
  // }

  // getHomeItems() {
  //   return this.afs.collection("root").doc("home").collection("carousel").snapshotChanges();
  // }

  getHomeItems() {
    return this.afs.collection("home").snapshotChanges();
  }
}
