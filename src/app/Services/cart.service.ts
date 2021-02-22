import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMeal } from '../ViewModels/imeal';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: {mealImage:string,mealID:number, mealName:string, mealPrice:number, mealCount:number}[]=[];

  purchasedItems: {mealName:string, mealCount:number, totalPrice:number}[]=[];
  totalPrice:number=0;
  addTocart(mealImage:string,mealID:number, mealName:string, mealPrice:number, mealCount:number){
     this.items.push({mealImage,mealID,mealName,mealPrice,mealCount});
  }

  moveToCheckOut(mealName:string, mealCount:number, totalPrice:number){

    this.purchasedItems.push({mealName,mealCount,totalPrice});
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
  clearCart() {
    this.items = [];
    return this.items
  }
}
