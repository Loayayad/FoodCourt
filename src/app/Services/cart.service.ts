import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { isConstructorDeclaration } from 'typescript';
import { IMeal } from '../ViewModels/imeal';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  id:number=1;
  items: {mealImage:string,mealID:number, mealName:string, mealPrice:number, mealShow:boolean, mealDiscount:string, mealCount:number}[]=[];
  orders: {purchasedMeals:{mealName:string, mealCount:number,mealPrice:number, mealDiscount:string, totalPrice:number}[]
           ,userID:string|null}[]=[];
  purchasedItems: {mealName:string, mealCount:number,mealPrice:number, mealDiscount:string, totalPrice:number}[]=[];
  totalPrice:number=0;
  constructor(private afs: AngularFirestore){}
  addTocart(mealImage:string,mealID:number, mealName:string, mealPrice:number, mealShow:boolean, mealDiscount:string, mealCount:number){
    // this.items.forEach((element)=>{
    //     if(element.mealID == mealID){
    //       element.mealPrice += mealPrice ;
    //       element.mealCount += mealCount ;
          
    //     }
    //     return ;
    // }) 
    this.items.push({mealImage,mealID,mealName,mealPrice, mealShow, mealDiscount, mealCount});
  
  }

  moveToCheckOut(mealName:string, mealCount:number, mealPrice:number, mealDiscount:string, totalPrice:number){
    this.purchasedItems.push({mealName,mealCount, mealPrice, mealDiscount,totalPrice});
  }

  setTotal(total:number){
    this.totalPrice = total;
  }

  getTotal(){
    return this.totalPrice;
  }
  getItems(){
    return this.items

  }

  getPurchasedItems(){
    return this.purchasedItems;
  }

  postOrders(purchasedMeals:{mealName:string, mealCount:number,mealPrice:number, mealDiscount:string, totalPrice:number}[],
             userID:string|null){
    this.orders.push({purchasedMeals, userID});
    for(var i=0; i<this.orders.length; i++){
      for(var j=0; j<this.orders[i].purchasedMeals.length; j++)
      {
        this.afs.collection("orders").doc(`${this.orders[i].userID}`).set({
          id: this.orders[i].userID,
          name: this.orders[i].purchasedMeals[j].mealName,
          count: Number(this.orders[i].purchasedMeals[j].mealCount),
          price: Number(this.orders[i].purchasedMeals[j].mealPrice),
          total: Number(this.orders[i].purchasedMeals[j].totalPrice),
          discount: this.orders[i].purchasedMeals[j].mealDiscount,
          userID: this.orders[i].userID
        })
      }
      
    }
  }

  getOrders(){
    return this.orders;
  }
  clearCart() {
    this.items = [];
    return this.items
  }
}
