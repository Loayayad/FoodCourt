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
  
  orders: {purchasedMeals:{mealName:string, mealCount:number,mealPrice:number, mealDiscount:string}[],userID:string|null, option:string}[]=[];
  
  purchasedItems: {mealName:string, mealCount:number,mealPrice:number, mealDiscount:string}[]=[];

  method:string = '' ;
  
  totalPrice:number=0;
  constructor(private afs: AngularFirestore){}
  addTocart(mealImage:string,mealID:number, mealName:string, mealPrice:number, mealShow:boolean, mealDiscount:string, mealCount:number){
    this.items.push({mealImage,mealID,mealName,mealPrice, mealShow, mealDiscount, mealCount});
  }

  moveToCheckOut(mealName:string, mealCount:number, mealPrice:number, mealDiscount:string){
    this.purchasedItems.push({mealName,mealCount, mealPrice, mealDiscount});
    
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

  postOrders(purchasedMeals:{mealName:string, mealCount:number,mealPrice:number, 
    mealDiscount:string}[], userID:string|null, option:string){
    this.orders.push({purchasedMeals, userID, option});
    for(var i=0; i<this.orders.length; i++){
      for(var j=0; j<this.purchasedItems.length; j++)
      {
        if(option)
        {
          this.method = 'Credit Card'
        }
        else{
          this.method = 'Cash on Delivery'
        }
        this.afs.collection("orders").add({
          id: this.orders[i].userID,
          mealName: this.purchasedItems[j].mealName,
          mealCount: this.purchasedItems[j].mealCount,
          mealPrice: this.purchasedItems[j].mealPrice,
          userID: this.orders[i].userID,
          option: this.method,
          date: new Date()
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
