import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMeal } from '../ViewModels/imeal';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import { AngularFirestore} from '@angular/fire/firestore'


@Injectable({
  providedIn: 'root'
})
export class MealAPIService {

  userRef: AngularFireList<any>[]=[];
  userRed: AngularFireObject<any>[]=[];

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase,
    private afs: AngularFirestore
    ) { }

  // getAllMeals(): Observable <IMeal[]>
  // {
  //   return this.http.get<IMeal[]>(`${environment.API_URL}/meals`);
  // }

  getAllMeals() {
    return this.afs.collection("meals").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en").snapshotChanges();
  }

  // getMealByCategoryID(catID: number): Observable <IMeal[]>
  // {
  //   return this.http.get<IMeal[]>(`${environment.API_URL}/meals?categoryID=${catID}`)
  // }

  getMealByCategoryID(catID: number,catIndex:number)
  {
    return this.afs.collection("meals").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en",ref => ref.where('categoryID','==',catID).limit(catIndex)).snapshotChanges();
  }

  // getMealByID(pID:number): Observable <IMeal>
  // {
  //   return this.http.get<IMeal>(`${environment.API_URL}/meals/${pID}`);
  // }

  
  getMealByID(pID:number)
  {
    return this.afs.collection("meals").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en",ref => ref.where('id','==',pID)).snapshotChanges();
  }

  // getMealByChefID(cID:number): Observable <IMeal[]>
  // {
  //   return this.http.get<IMeal[]>(`${environment.API_URL}/meals?chefID=${cID}`);
  // }

  getMealByChefID(cID:number)
  {
    return this.afs.collection("meals").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en",ref => ref.where('chefID','==',cID)).snapshotChanges()
  }
}
