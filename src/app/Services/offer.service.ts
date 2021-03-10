import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import { AngularFirestore} from '@angular/fire/firestore'


@Injectable({
  providedIn: 'root'
})
export class OfferService {

  userRef: AngularFireList<any>[]=[];
  userRed: AngularFireObject<any>[]=[];

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase,
    private afs: AngularFirestore
    ) { }

    getOffers(offerIndex:number){
      return this.afs.collection("meals").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en",ref => ref.limit(offerIndex).where('show','==',true)).snapshotChanges();
    }

    getOffersOrderByName(offerIndex:number){
        return this.afs.collection("meals").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en",ref => ref.limit(offerIndex).where('show','==',true).orderBy("name")).snapshotChanges();
      
    }

    getOffersOrderByPrice(offerIndex:number){
      return this.afs.collection("meals").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en",ref => ref.limit(offerIndex).where('show','==',true).orderBy("price")).snapshotChanges();
    
  }

  getOffersOrderByPriceDesc(offerIndex:number){
    return this.afs.collection("meals").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en",ref => ref.limit(offerIndex).where('show','==',true).orderBy("price","desc")).snapshotChanges();
  
}

getOffersOrderByDiscount(offerIndex:number){
  return this.afs.collection("meals").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en",ref => ref.limit(offerIndex).where('show','==',true).orderBy("discount")).snapshotChanges();

}

getOffersOrderByDiscountDesc(offerIndex:number){
  return this.afs.collection("meals").doc(localStorage.getItem("lang")||"en").collection(localStorage.getItem("lang")||"en",ref => ref.limit(offerIndex).where('show','==',true).orderBy("discount","desc")).snapshotChanges();

}

}
