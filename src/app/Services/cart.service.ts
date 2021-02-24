import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMeal } from '../ViewModels/imeal';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: {mealImage:string,mealID:number, mealName:string, mealPrice:number, mealShow:boolean, mealDiscount:string, mealCount:number}[]=[];
  orders: {purchasedMeals:{mealName:string, mealCount:number,mealPrice:number, mealDiscount:string, totalPrice:number}[]
           ,userID:string|null}[]=[];
  purchasedItems: {mealName:string, mealCount:number,mealPrice:number, mealDiscount:string, totalPrice:number}[]=[];
  totalPrice:number=0;
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
  }

  getOrders(){
    return this.orders;
  }
  clearCart() {
    this.items = [];
    return this.items
  }
}
